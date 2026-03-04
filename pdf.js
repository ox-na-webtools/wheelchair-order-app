// PDF生成処理を集約したモジュール
// app.js から状態やユーティリティ関数を受け取り、jsPDFでPDFを生成する

window.buildPdf = async function buildPdf(params) {
  const {
    selectedSeries,
    customerInfo,
    totalLineItems,
    dimensions,
    currentCatalog,
    selectedOptions,
    selectedAccessories,
    itemPrice,
    remarks,
    totalAmount,
    yen,
  } = params || {};

  try {
    // jsPDFライブラリの動的読み込み
    if (!window.jspdf) {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
      await new Promise((resolve) => {
        script.onload = resolve;
        document.head.appendChild(script);
      });
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("p", "mm", "a4");

    // =====================================================
    // フォント登録（文字化け完全対策 v2）
    // =====================================================
    let fontLoaded = false;

    // Step1: VFSに既にフォントデータがある場合 (standalone HTML: jsPDF先読み済み)
    try {
      if (typeof doc.existsFileInVFS === "function" && doc.existsFileInVFS("NotoSansJP-Regular.ttf")) {
        doc.addFont("NotoSansJP-Regular.ttf", "NotoSansJP", "normal");
        doc.setFont("NotoSansJP", "normal");
        fontLoaded = true;
        console.log("[PDF font] Step1: VFSからフォント登録成功");
      }
    } catch (e) {
      console.warn("[PDF font] Step1 error:", e);
    }

    // Step2: VFSにない場合 → NotoSansJP-Regular.js スクリプトを再実行
    //        (jsPDF が今動的読込で初めて使えるようになったタイミング)
    if (!fontLoaded) {
      try {
        await new Promise((resolve, reject) => {
          const s = document.createElement("script");
          s.src = "https://ox-na-webtools.github.io/wheelchair-order-app/NotoSansJP-Regular.js";
          s.onload = resolve;
          s.onerror = reject;
          document.head.appendChild(s);
        });
        // 再実行後にVFSを確認
        if (typeof doc.existsFileInVFS === "function" && doc.existsFileInVFS("NotoSansJP-Regular.ttf")) {
          doc.addFont("NotoSansJP-Regular.ttf", "NotoSansJP", "normal");
          doc.setFont("NotoSansJP", "normal");
          fontLoaded = true;
          console.log("[PDF font] Step2: NotoSansJP-Regular.js 再実行でフォント登録成功");
        }
      } catch (e) {
        console.warn("[PDF font] Step2 error:", e);
      }
    }

    // Step3: 最終手段 → base64.txt を直接 fetch して登録
    if (!fontLoaded) {
      try {
        const fontRes = await fetch("./NotoSansJP-Regular.base64.txt");
        if (!fontRes.ok) throw new Error("HTTP " + fontRes.status);
        const fontBase64 = (await fontRes.text()).trim();
        doc.addFileToVFS("NotoSansJP-Regular.ttf", fontBase64);
        doc.addFont("NotoSansJP-Regular.ttf", "NotoSansJP", "normal");
        doc.setFont("NotoSansJP", "normal");
        fontLoaded = true;
        console.log("[PDF font] Step3: base64.txt fetchでフォント登録成功");
      } catch (e) {
        console.warn("[PDF font] Step3 error:", e);
      }
    }

    const FONT_NAME = fontLoaded ? "NotoSansJP" : "helvetica";
    doc.setFont(FONT_NAME, "normal");

    if (!fontLoaded) {
      console.error(
        "[PDF font] 全ステップ失敗: デフォルトフォントで出力します（日本語が文字化けします）"
      );
    }

    // 設定値
    const margin = 12; // 余白 12mm
    const pageWidth = 210;
    const pageHeight = 297;
    const contentWidth = pageWidth - margin * 2;
    let y = margin;

    // ヘルパー関数: テキスト描画
    const addText = (text, x, yPos, size = 10, style = "normal", align = "left") => {
      doc.setFont(FONT_NAME, "normal");
      doc.setFontSize(size);
      if (align === "right") {
        doc.text(String(text || ""), x, yPos, { align: "right" });
      } else {
        doc.text(String(text || ""), x, yPos);
      }
    };

    // ヘッダー描画
    const drawHeader = (pageNum) => {
      doc.setDrawColor(0);
      doc.setLineWidth(0.5);
      addText("OX ENGINEERING ORDER MANIFEST", margin, margin + 5, 16);
      addText(
        `作成日: ${new Date().toISOString().split("T")[0]}  PAGE: ${pageNum}`,
        pageWidth - margin,
        margin + 5,
        8,
        "normal",
        "right"
      );
      doc.line(margin, margin + 8, pageWidth - margin, margin + 8);
    };

    // フッター描画（最終ページ固定）
    const drawFinalFooter = () => {
      const totalPages = doc.internal.getNumberOfPages();
      doc.setPage(totalPages);
      doc.setFontSize(8);
      doc.setTextColor(100);
      const footerY = pageHeight - 15;
      doc.text("本注文書を下記メールアドレスへ送付してください", margin, footerY);
      doc.text("送付先：〇〇〇〇＠oxxxxx.co.jp", margin, footerY + 5);
      doc.setTextColor(0);
    };

    // ファイル名生成 (作成日_ox_機種_販売店名.pdf)
    const today = new Date().toISOString().split("T")[0];
    const seriesName = selectedSeries || "unknown";
    const dealer = customerInfo?.dealerName || "store";
    const rawFileName = `${today}_ox_${seriesName}_${dealer}.pdf`;
    const fileName = rawFileName.replace(/[\\/:*?"<>|]/g, "");

    // 1ページ目開始
    drawHeader(1);
    y = margin + 20;

    // 顧客・販売店情報
    doc.setFillColor(245);
    doc.rect(margin, y - 5, contentWidth, 15, "F");
    addText(`販売店名: ${customerInfo?.dealerName || ""}`, margin + 5, y + 2, 10);
    addText(`担当者名: ${customerInfo?.salesPerson || ""}`, margin + 80, y + 2, 10);
    addText(`ユーザー名: ${customerInfo?.userName || "---"}`, margin + 140, y + 2, 10);
    y += 25;

    // 仕様明細
    addText("01. 基本構成・パーツ", margin, y, 11);
    y += 8;
    doc.setLineWidth(0.1);

    (totalLineItems || []).forEach((item) => {
      // 改ページ判定
      if (y > pageHeight - 40) {
        doc.addPage();
        drawHeader(doc.internal.getNumberOfPages());
        y = margin + 20;
      }
      addText(item.label, margin + 2, y, 9);
      addText(item.name, margin + 40, y, 9);
      addText(item.no, margin + 120, y, 9);
      addText(
        item.price === 0 ? "込" : yen(item.price),
        pageWidth - margin - 2,
        y,
        9,
        "normal",
        "right"
      );
      doc.setDrawColor(230);
      doc.line(margin, y + 2, pageWidth - margin, y + 2);
      doc.setDrawColor(0);
      y += 6;
    });

    // 寸法
    y += 10;
    if (y > pageHeight - 50) {
      doc.addPage();
      drawHeader(doc.internal.getNumberOfPages());
      y = margin + 20;
    }

    addText("02. 指定寸法一覧", margin, y, 11);
    y += 8;

    const dimList = Object.entries(dimensions || {});
    const dimLabels = {
      offset: "オフセット",
      h4Type: "H4 バック高（タイプ）",
      h4Val: "H4 バック高（値）",
      l8: "車軸前後位置 (L8)",
      lever: "ブレーキレバー長",
      w1: "座幅(W1)",
      l1: "座奥行(L1)",
      sb: "バックレスト角(SB)",
      w2: "ハンドリム間隔(W2)",
      cm: "キャンバー",
      casterWheel: "D2 キャスターホイール径",
      h2: "H2 前座高",
      h3: "H3 後座高",
    };

    dimList.forEach(([k, v], idx) => {
      const col = idx % 4;
      const row = Math.floor(idx / 4);
      const displayV =
        k === "casterWheel" &&
        currentCatalog?.dimensionRules?.casterWheel?.length &&
        v
          ? currentCatalog.dimensionRules.casterWheel.find((cw) =>
              (typeof cw === "object" ? cw.value : cw) === v
            )?.label ?? v
          : v;
      const suffix =
        (k === "h2" || k === "h3") && displayV
          ? "mm"
          : k === "sb" && displayV
          ? "°"
          : "";
      addText(
        `${dimLabels[k] || k.toUpperCase()}: ${displayV}${suffix}`,
        margin + col * 45,
        y + row * 6,
        9
      );

      if (col === 3 || idx === dimList.length - 1) {
        if (idx === dimList.length - 1) {
          y += row * 6 + 10;
        }
      }
    });

    // オプション（別紙扱いになりやすい項目）
    const extras = [...(selectedOptions || []), ...(selectedAccessories || [])].filter(
      (o) => o.__group !== "ARMREST"
    );

    if (extras.length > 0) {
      if (y > pageHeight - 40) {
        doc.addPage();
        drawHeader(doc.internal.getNumberOfPages());
        y = margin + 20;
      }
      addText("03. オプション & アクセサリー", margin, y, 11);
      y += 8;

      extras.forEach((opt) => {
        if (y > pageHeight - 30) {
          doc.addPage();
          drawHeader(doc.internal.getNumberOfPages());
          y = margin + 20;
        }
        addText(`[${opt.no}] ${opt.name}`, margin + 2, y, 9);
        addText(yen(itemPrice(opt)), pageWidth - margin - 2, y, 9, "normal", "right");
        y += 6;
      });
    }

    // 備考
    if (remarks) {
      y += 10;
      if (y > pageHeight - 40) {
        doc.addPage();
        drawHeader(doc.internal.getNumberOfPages());
        y = margin + 20;
      }
      addText("04. 備考・特記事項", margin, y, 11);
      y += 8;
      const splitRemarks = doc.splitTextToSize(remarks, contentWidth - 10);
      doc.text(splitRemarks, margin + 5, y);
      y += splitRemarks.length * 5 + 10;
    }

    // 合計金額（最終ページの固定位置付近）
    y = Math.max(y, pageHeight - 50);
    doc.setFillColor(30, 41, 59); // Slate-900相当
    doc.rect(margin, y, contentWidth, 15, "F");
    doc.setTextColor(255);
    addText("合計金額 (概算)", margin + 5, y + 10, 10);
    addText(yen(totalAmount), pageWidth - margin - 5, y + 10, 14, "bold", "right");

    // フッター描画
    drawFinalFooter();

    // 出力（スマホ・タブレットでは共有シートでメール送信などを可能に）
    const blob = doc.output("blob");
    const file = new File([blob], fileName, { type: "application/pdf" });

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768;

    // ① スマホのみ：共有API対応なら共有シートを表示（メール・保存などが選べる）
    if (isMobile && typeof navigator.canShare === "function" && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: fileName,
        });
        return;
      } catch (e) {
        if (e.name !== "AbortError") {
          // ユーザーキャンセル以外は下へ
        }
      }
    }

    // ② スマホで共有が使えない/キャンセル時は新しいタブでPDFを表示（そこから共有→メールなど）
    if (isMobile) {
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
      setTimeout(() => URL.revokeObjectURL(url), 60_000);
      return;
    }

    // ③ PCなどは従来どおりダウンロード
    doc.save(fileName);
  } catch (pdfErr) {
    console.error("PDF生成中にエラーが発生しました:", pdfErr);
    alert("PDF生成に失敗しました。ページを再読み込みしてから再度お試しください。");
  }
};

