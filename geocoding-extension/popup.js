document.getElementById("searchBtn").addEventListener("click", async () => {
  const landmark = document.getElementById("landmark").value.trim();
  if (!landmark) {
    document.getElementById("status").textContent = "ランドマーク名を入力してください。";
    return;
  }

  const url = `https://www.geocoding.jp/api/?q=${encodeURIComponent(landmark)}`;
  const res = await fetch(url);
  const xmlText = await res.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlText, "application/xml");

  const lat = xml.querySelector("lat")?.textContent;
  const lng = xml.querySelector("lng")?.textContent;

  if (lat && lng) {
    const coord = `${lat},${lng}`;
    await navigator.clipboard.writeText(coord);
    document.getElementById("status").textContent = `コピー成功: ${coord}`;
  } else {
    document.getElementById("status").textContent = "緯度経度の取得に失敗しました。";
  }
});

document.getElementById("mapBtn").addEventListener("click", async () => {
  try {
    const text = await navigator.clipboard.readText();
    if (!text.match(/^[-.\d]+,[-.\d]+$/)) {
      document.getElementById("status").textContent = "クリップボードに正しい形式の緯度経度がありません。";
      return;
    }
    const url = `https://www.google.com/maps?q=${text}`;
    chrome.tabs.create({ url });
  } catch (e) {
    document.getElementById("status").textContent = "クリップボードの読み取りに失敗しました。";
  }
});

document.getElementById("articleBtn").addEventListener("click", async () => {
  try {
    const text = await navigator.clipboard.readText();
    if (!text.match(/^[-.\d]+,[-.\d]+$/)) {
      document.getElementById("status").textContent = "クリップボードに正しい形式の緯度経度がありません。";
      return;
    }
    const [lat, lon] = text.split(",");
    const url = `http://gkukan.net/htdocs/PMtiles/article14_map49.html#15.37/${lat}/${lon}`;
    chrome.tabs.create({ url });
  } catch (e) {
    document.getElementById("status").textContent = "クリップボードの読み取りに失敗しました。";
  }
});
