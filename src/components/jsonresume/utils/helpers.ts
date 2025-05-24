// Utility functions for date formatting and paragraph splitting
import moment from "moment";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export function formatDateMY(date?: string) {
  if (!date) return "";
  return moment(date, ["YYYY-MM-DD"]).format("MMM YYYY");
}

export function formatDateY(date?: string) {
  if (!date) return "";
  return moment(date, ["YYYY-MM-DD"]).format("YYYY");
}

export function formatDateDMY(date?: string) {
  if (!date) return "";
  return moment(date, ["YYYY-MM-DD"]).format("D MMM YYYY");
}

export function paragraphSplit(text?: string) {
  if (!text) return null;
  // Render markdown, then split by newlines and wrap in <p>
  const html = md.render(text);
  return html;
}

export function spaceToDash(str: string) {
  return str.replace(/\s/g, "-").toLowerCase();
}

export function toLowerCase(str: string) {
  return str.toLowerCase();
}
