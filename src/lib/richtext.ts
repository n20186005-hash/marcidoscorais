// 将精简富文本渲染为 HTML 字符串：
// - **加粗** -> <strong>
// - 换行 \n -> <br/>
// 用于静态内容（Astro 中以 set:html 输出）。
export function renderRichText(input: string | undefined): string {
  if (!input) return "";
  let s = input;
  // 转义 HTML 特殊字符，避免注入
  s = s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  // **bold**
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  // 换行
  s = s.replace(/\n/g, "<br/>");
  return s;
}
