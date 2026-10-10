window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="图寸">
<meta name="theme-color" content="#1c1c1e">
<title>图寸</title>
<style>
* { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
:root { --ad-reserve: 0px; --kb: 0px; }
html, body {
  margin: 0; padding: 0; height: 100%; overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif;
  background: #000; color: #fff;
  -webkit-user-select: none; user-select: none;
}
.view {
  position: absolute;
  top: 0; right: 0; bottom: var(--ad-reserve); left: 0;
  display: flex; flex-direction: column;
  background: #000;
}
.view[hidden] { display: none; }
header {
  display: flex; align-items: center;
  padding: 10px 10px;
  padding-top: calc(10px + env(safe-area-inset-top));
  background: #1c1c1e; border-bottom: 1px solid #2c2c2e;
  min-height: 52px;
  z-index: 5;
}
header > * + * { margin-left: 4px; }
header h1 {
  font-size: 17px; font-weight: 600; margin: 0; flex: 1; text-align: center;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
header h1.editable {
  cursor: pointer;
  border-radius: 8px;
  padding: 4px 8px;
  margin: 0 2px;
}
header h1.editable:active { background: rgba(255,255,255,0.1); }
.btn-icon {
  background: none; border: none; color: #0a84ff;
  font-size: 15px; padding: 6px 6px; cursor: pointer;
  border-radius: 8px; min-width: 38px;
}
.btn-icon:active { background: rgba(255,255,255,0.08); }
.btn-icon:disabled { opacity: 0.35; }
.btn-icon.primary { font-weight: 600; font-size: 22px; line-height: 1; }
.btn-icon.view-toggle { font-size: 18px; color: #fff; }

.search-bar { padding: 8px 12px; background: #1c1c1e; }
.search-bar[hidden] { display: none; }
.search-bar input {
  width: 100%; padding: 8px 12px; border-radius: 10px;
  background: #2c2c2e; border: none; color: #fff;
  font-size: 15px; outline: none;
}
.search-bar input::placeholder { color: #666; }

.scroll-list {
  flex: 1; overflow-y: auto; -webkit-overflow-scrolling: touch;
  padding-bottom: calc(40px + env(safe-area-inset-bottom));
}
.scroll-list.mode-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 12px;
  padding-bottom: calc(40px + env(safe-area-inset-bottom));
  align-content: start;
}
.scroll-list.has-bottombar {
  padding-bottom: calc(80px + env(safe-area-inset-bottom));
}

#home-selection-bar {
  position: absolute; left: 0; right: 0; bottom: 0;
  display: flex; padding: 8px 12px;
  padding-bottom: calc(8px + env(safe-area-inset-bottom));
  background: rgba(28,28,30,0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid #2c2c2e;
  z-index: 10;
}
#home-selection-bar[hidden] { display: none; }
#home-selection-bar button {
  flex: 1; padding: 10px; background: #2c2c2e; color: #fff;
  border: none; border-radius: 10px; font-size: 13px; cursor: pointer;
}
#home-selection-bar button + button { margin-left: 8px; }
#home-selection-bar button:disabled { opacity: 0.35; }
#home-selection-bar button.danger { color: #ff3b30; }

.folder-row {
  display: flex; align-items: center;
  padding: 12px 14px;
  border-bottom: 1px solid #1c1c1e;
  cursor: pointer;
  -webkit-touch-callout: none;
}
.folder-row > * + * { margin-left: 12px; }
.folder-row:active { background: #1c1c1e; }
.folder-row.selected { background: rgba(10,132,255,0.15); }
.folder-row .checkbox {
  width: 22px; height: 22px; flex: 0 0 22px;
  border-radius: 50%;
  border: 2px solid #5a5a5e;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 14px;
  background: transparent;
}
.folder-row.selected .checkbox { background: #0a84ff; border-color: #0a84ff; }
.folder-row.selected .checkbox::after { content: '✓'; font-weight: 600; }
.folder-row .folder-thumb {
  width: 60px; height: 60px; flex: 0 0 60px;
  background: #2c2c2e; border-radius: 10px;
  overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  font-size: 26px;
}
.folder-row .folder-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
.folder-row .info { flex: 1; min-width: 0; }
.folder-row .name {
  font-size: 16px; font-weight: 500;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.folder-row .meta { font-size: 12px; color: #8e8e93; margin-top: 3px; }
.folder-row .chevron { color: #5a5a5e; font-size: 20px; font-weight: 300; }

.folder-card {
  background: #1c1c1e;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  -webkit-touch-callout: none;
  display: flex;
  flex-direction: column;
  position: relative;
}
.folder-card:active { opacity: 0.75; }
.folder-card.selected { outline: 3px solid #0a84ff; }
.folder-card .checkbox-card {
  position: absolute;
  top: 8px; right: 8px;
  width: 24px; height: 24px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.6);
  background: rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 14px;
  z-index: 2;
}
.folder-card.selected .checkbox-card { background: #0a84ff; border-color: #0a84ff; }
.folder-card.selected .checkbox-card::after { content: '✓'; font-weight: 600; }
.folder-card .folder-cover {
  position: relative;
  height: 0;
  padding-bottom: 75%;
  background: #2c2c2e;
  overflow: hidden;
  flex-shrink: 0;
}
.folder-card .folder-cover img {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover; display: block;
}
.folder-card .folder-cover > span {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 44px;
}
.folder-card-name {
  padding: 10px 12px 2px;
  font-size: 14px; font-weight: 500;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  color: #fff;
}
.folder-card-count { padding: 0 12px 10px; font-size: 11px; color: #8e8e93; }

.project-row {
  display: flex; align-items: center;
  padding: 10px 14px; border-bottom: 1px solid #1c1c1e; cursor: pointer;
  -webkit-touch-callout: none;
}
.project-row > * + * { margin-left: 12px; }
.project-row:active { background: #1c1c1e; }
.project-row .thumb {
  width: 60px; height: 60px; flex: 0 0 60px;
  background: #2c2c2e; border-radius: 8px; object-fit: cover;
}
.project-row .info { flex: 1; min-width: 0; }
.project-row .name {
  font-size: 15px; font-weight: 500;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.project-row .meta { font-size: 12px; color: #8e8e93; margin-top: 3px; }

.project-card {
  background: #1c1c1e;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  -webkit-touch-callout: none;
  display: flex;
  flex-direction: column;
}
.project-card:active { opacity: 0.75; }
.project-card .project-cover {
  position: relative;
  height: 0;
  padding-bottom: 75%;
  background: #2c2c2e;
  overflow: hidden;
  flex-shrink: 0;
}
.project-card .project-cover img {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover; display: block;
}
.project-card .project-cover > span {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 40px;
}
.project-card-name {
  padding: 10px 12px 2px;
  font-size: 14px; font-weight: 500;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  color: #fff;
}
.project-card-meta { padding: 0 12px 10px; font-size: 11px; color: #8e8e93; }

.add-card {
  background: transparent;
  border: 2px dashed #3a3a3c;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  -webkit-touch-callout: none;
}
.add-card:active { background: rgba(255,255,255,0.04); }
.add-card .add-cover {
  position: relative;
  height: 0;
  padding-bottom: 75%;
  color: #8e8e93;
  flex-shrink: 0;
}
.add-card .add-cover > * {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 40px;
  font-weight: 200;
}
.add-card .add-label {
  padding: 8px 12px 12px;
  font-size: 13px;
  color: #8e8e93;
  text-align: center;
}

.add-row {
  display: flex; align-items: center;
  padding: 12px 14px;
  border-bottom: 1px solid #1c1c1e;
  cursor: pointer;
  -webkit-touch-callout: none;
}
.add-row > * + * { margin-left: 12px; }
.add-row:active { background: #1c1c1e; }
.add-row .add-thumb {
  width: 60px; height: 60px; flex: 0 0 60px;
  background: transparent;
  border: 2px dashed #3a3a3c;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  color: #8e8e93;
  font-size: 26px;
  font-weight: 200;
}
.add-row .info { flex: 1; min-width: 0; }
.add-row .name { font-size: 15px; font-weight: 500; color: #0a84ff; }

.image-cell.add-image-cell { cursor: pointer; -webkit-touch-callout: none; }
.image-cell.add-image-cell .thumb-wrap {
  background: transparent;
  border: 2px dashed #3a3a3c;
  color: #8e8e93;
  font-size: 30px;
  font-weight: 200;
}
.image-cell.add-image-cell .thumb-wrap > span {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 30px;
  font-weight: 200;
}
.image-cell.add-image-cell:active .thumb-wrap { background: rgba(255,255,255,0.04); }
.image-cell.add-image-cell .img-name { color: #0a84ff; }

.empty {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  min-height: 40vh; gap: 10px; color: #8e8e93; text-align: center; padding: 20px;
  grid-column: 1/-1;
}
.empty .icon { font-size: 48px; }
.empty h2 { margin: 0; font-size: 17px; color: #fff; }
.empty p { margin: 0; font-size: 14px; }

#image-grid {
  flex: 1; overflow-y: auto; -webkit-overflow-scrolling: touch;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px 6px;
  padding: 10px 8px;
  padding-bottom: calc(40px + env(safe-area-inset-bottom));
  align-content: start;
}
.image-cell {
  display: flex; flex-direction: column;
  cursor: pointer;
  -webkit-touch-callout: none;
}
.image-cell > * + * { margin-top: 4px; }
.image-cell:active { opacity: 0.75; }
.image-cell .thumb-wrap {
  position: relative;
  height: 0;
  padding-bottom: 100%;
  background: #2c2c2e;
  border-radius: 8px;
  overflow: hidden;
}
.image-cell .thumb-wrap img {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover; display: block;
}
.image-cell .badge {
  position: absolute;
  bottom: 5px; right: 5px;
  background: rgba(0,0,0,0.7);
  padding: 2px 7px;
  border-radius: 10px;
  font-size: 11px;
  color: #fff;
  font-weight: 600;
  z-index: 2;
}
.image-cell .order {
  position: absolute;
  top: 5px; left: 5px;
  background: rgba(0,0,0,0.7);
  width: 20px; height: 20px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px;
  color: #fff;
  font-weight: 600;
  z-index: 2;
}
.image-cell .img-name {
  font-size: 10px;
  color: #8e8e93;
  text-align: center;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  padding: 0 2px;
  line-height: 1.2;
}

#canvas-wrap {
  flex: 1; position: relative;
  background: #111;
  overflow: hidden;
  touch-action: none;
}
#editor-canvas {
  position: absolute; top: 0; left: 0;
  width: 100%; height: 100%;
  display: block;
  touch-action: none;
}
#magnifier {
  position: absolute; pointer-events: none;
  border-radius: 50%; border: 2px solid #fff;
  box-shadow: 0 4px 14px rgba(0,0,0,0.5);
  z-index: 50; background: #fff;
}

#editor-fab {
  position: absolute;
  right: 14px;
  bottom: 14px;
  display: flex;
  flex-direction: column;
  z-index: 40;
  pointer-events: auto;
}
#editor-fab button + button { margin-top: 10px; }
#editor-fab button {
  width: 52px; height: 52px;
  border-radius: 50%;
  background: rgba(28,28,30,0.72);
  border: 1.5px solid rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.5);
  font-size: 22px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  padding: 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
#editor-fab button.active {
  background: rgba(10,132,255,0.92);
  border-color: #0a84ff;
  color: #fff;
  box-shadow: 0 2px 14px rgba(10,132,255,0.5);
}
#editor-fab button:active { transform: scale(0.93); }
#btn-add-text {
  font-family: -apple-system, "PingFang SC", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
}

#watermark-layer {
  position: absolute;
  top: 14px; left: 14px;
  display: flex; align-items: center;
  pointer-events: none;
  z-index: 45;
  transition: opacity 0.2s;
}
#watermark-layer > * + * { margin-left: 8px; }
#watermark-layer[hidden] { display: none; }
#watermark-close {
  pointer-events: auto;
  width: 22px; height: 22px;
  border-radius: 50%;
  background: rgba(0,0,0,0.55);
  border: 1px solid rgba(255,255,255,0.25);
  color: rgba(255,255,255,0.9);
  font-size: 14px;
  line-height: 1;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  padding: 0;
  font-family: -apple-system, sans-serif;
}
#watermark-close:active { background: rgba(255,59,48,0.7); }
#watermark-layer .watermark-text {
  color: rgba(255,255,255,0.55);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 3px rgba(0,0,0,0.7);
  pointer-events: none;
}

.editor-footer {
  display: flex; padding: 8px 10px;
  padding-bottom: calc(8px + env(safe-area-inset-bottom));
  background: #1c1c1e; border-top: 1px solid #2c2c2e;
  align-items: center;
  z-index: 5;
}
.editor-footer > * + * { margin-left: 6px; }
.editor-footer button {
  background: #2c2c2e; border: none; color: #fff;
  padding: 12px 10px; border-radius: 10px;
  font-size: 14px; cursor: pointer;
  min-width: 44px;
}
.editor-footer button:disabled { opacity: 0.35; }
.editor-footer button:active { background: #3a3a3c; }
.editor-footer .btn-wide { flex: 1; }
.editor-footer .zoom-label {
  color: #8e8e93; font-size: 12px;
  min-width: 48px; text-align: center;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
  padding: 8px 4px;
  border-radius: 6px;
}
.editor-footer .zoom-label:active { background: rgba(255,255,255,0.08); }

.modal {
  position: fixed;
  top: 0; right: 0;
  bottom: var(--kb, 0px);
  left: 0;
  background: rgba(0,0,0,0.55);
  z-index: 100; display: flex; align-items: flex-end;
}
.modal[hidden] { display: none; }
.modal .sheet {
  width: 100%; background: #1c1c1e;
  border-radius: 16px 16px 0 0; padding: 16px;
  padding-bottom: calc(16px + env(safe-area-inset-bottom));
  max-height: 90%; overflow-y: auto;
  animation: slideUp 0.22s ease-out;
}
@keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
.sheet h3 { margin: 0 0 14px; font-size: 17px; text-align: center; }
.sheet input[type="text"] {
  width: 100%; padding: 14px; background: #2c2c2e; border: none; color: #fff;
  border-radius: 10px; font-size: 22px; font-weight: 600;
  outline: none; margin-bottom: 12px; text-align: center;
}

#modal-value .sheet { max-height: 50%; }
#modal-style .sheet { max-height: 80%; }

.unit-bar { display: flex; margin-bottom: 14px; }
.unit-bar[hidden] { display: none; }
.unit-bar > * + * { margin-left: 6px; }
.unit-btn {
  flex: 1; padding: 9px; background: #2c2c2e; border: none; color: #fff;
  border-radius: 8px; font-size: 14px; cursor: pointer;
}
.unit-btn.active { background: #0a84ff; font-weight: 600; }
.sheet .row { display: flex; }
.sheet .row > * + * { margin-left: 8px; }
.sheet .row button {
  flex: 1; padding: 14px; border: none; border-radius: 10px;
  font-size: 16px; cursor: pointer; background: #2c2c2e; color: #fff;
}
.sheet .row button.primary { background: #0a84ff; font-weight: 600; }
.sheet .row button.danger { background: #ff3b30; }
.menu-item {
  display: block; width: 100%; padding: 15px;
  background: none; border: none; color: #fff; font-size: 16px;
  text-align: left; border-bottom: 1px solid #2c2c2e; cursor: pointer;
}
.menu-item:last-child { border-bottom: none; }
.menu-item.danger { color: #ff3b30; }
.menu-item:active { background: rgba(255,255,255,0.06); }

.style-section { margin-bottom: 18px; }
.style-section .style-label {
  font-size: 13px; color: #8e8e93; margin-bottom: 8px;
  display: flex; align-items: center; justify-content: space-between;
}
.color-grid { display: grid; grid-template-columns: repeat(8, 1fr); gap: 8px; }
.color-dot {
  padding-bottom: 100%;
  position: relative;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
}
.color-dot.active { border-color: #fff; }
.color-dot.active::after {
  content: '✓'; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 13px; font-weight: bold;
  text-shadow: 0 1px 3px rgba(0,0,0,0.6);
}
.endpoint-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px; }
.endpoint-btn {
  position: relative;
  height: 0;
  padding-bottom: 100%;
  background: #2c2c2e;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
}
.endpoint-btn.active { border-color: #0a84ff; background: #1a3a5a; }
.endpoint-btn svg { position: absolute; top: 15%; left: 15%; width: 70%; height: 70%; }

.label-pos-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
.label-pos-btn {
  padding: 12px 6px;
  background: #2c2c2e;
  border: 2px solid transparent;
  color: #fff;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  font-family: inherit;
}
.label-pos-btn.active { border-color: #0a84ff; background: #1a3a5a; color: #0a84ff; font-weight: 600; }
.label-pos-btn:active { background: #3a3a3c; }

.slider-row { display: flex; align-items: center; }
.slider-row > * + * { margin-left: 12px; }
.slider-row input[type="range"] { flex: 1; accent-color: #0a84ff; }
.slider-row .weight-val {
  min-width: 50px; text-align: right; font-size: 14px; color: #8e8e93;
  font-variant-numeric: tabular-nums;
}
.toggle-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 0;
  border-top: 1px solid #2c2c2e;
}
.toggle-row:last-of-type { border-bottom: 1px solid #2c2c2e; }
.toggle-row input { width: 22px; height: 22px; accent-color: #0a84ff; }
.toggle-row .label-group { display: flex; flex-direction: column; gap: 2px; }
.toggle-row .label-group .hint { font-size: 11px; color: #8e8e93; }

.style-preview {
  display: flex; justify-content: center;
  padding: 14px; background: #2c2c2e; border-radius: 10px;
  margin-bottom: 16px;
}

.sort-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.sort-btn {
  padding: 14px 8px;
  background: #2c2c2e;
  border: 2px solid transparent;
  color: #fff;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  font-family: inherit;
  text-align: center;
}
.sort-btn.active { border-color: #0a84ff; background: #1a3a5a; color: #0a84ff; font-weight: 600; }
.sort-btn:active { background: #3a3a3c; }

.view-mode-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.view-mode-btn {
  padding: 14px 8px;
  background: #2c2c2e;
  border: 2px solid transparent;
  color: #fff;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  font-family: inherit;
  text-align: center;
}
.view-mode-btn.active { border-color: #0a84ff; background: #1a3a5a; color: #0a84ff; font-weight: 600; }
.view-mode-btn:active { background: #3a3a3c; }

.more-style-btn { background: none; border: none; color: #0a84ff; font-size: 14px; cursor: pointer; padding: 2px 0; }

#toast {
  position: fixed; top: calc(12px + env(safe-area-inset-top));
  left: 50%; transform: translateX(-50%);
  background: rgba(28,28,30,0.95); border: 1px solid #2c2c2e;
  color: #fff; padding: 8px 16px; border-radius: 20px;
  font-size: 14px; z-index: 999; pointer-events: none;
  opacity: 0; transition: opacity 0.25s;
  max-width: 90vw; text-align: center;
}
#toast.show { opacity: 1; }
.spinner {
  position: fixed; top: 0; right: 0; bottom: 0; left: 0; background: rgba(0,0,0,0.6);
  display: flex; align-items: center; justify-content: center;
  z-index: 998; color: #fff; font-size: 14px;
  flex-direction: column;
}
.spinner[hidden] { display: none; }
.spinner .ring {
  width: 40px; height: 40px;
  border: 3px solid rgba(255,255,255,0.15);
  border-top-color: #0a84ff; border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: 12px;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>
</head>
<body>

<input type="file" id="file-input" accept="image/*" multiple hidden>

<div class="view" id="view-list">
  <header>
    <div id="list-left"></div>
    <h1 id="list-title">图寸</h1>
    <div id="list-right"></div>
  </header>
  <div class="search-bar" id="search-bar" hidden>
    <input type="search" id="search-input" placeholder="搜索项目" autocomplete="off">
  </div>
  <div id="home-content" class="scroll-list"></div>
  <div id="home-selection-bar" hidden>
    <button data-action="batch-delete" class="danger">删除</button>
    <button data-action="batch-export-zip">导出 ZIP</button>
  </div>
</div>

<div class="view" id="view-folder" hidden>
  <header>
    <button class="btn-icon" id="folder-back">‹ 返回</button>
    <h1 id="folder-title">项目</h1>
    <button class="btn-icon" id="folder-more">⋯</button>
    <button class="btn-icon" id="folder-settings">⚙</button>
  </header>
  <div id="folder-content" class="scroll-list"></div>
</div>

<div class="view" id="view-project" hidden>
  <header>
    <button class="btn-icon" id="project-back">‹ 返回</button>
    <h1 id="project-title" class="editable">房间</h1>
    <button class="btn-icon" id="project-more">⋯</button>
    <button class="btn-icon" id="project-settings">⚙</button>
  </header>
  <div id="image-grid"></div>
</div>

<div class="view" id="view-editor" hidden>
  <header>
    <button class="btn-icon" id="editor-back">‹ 返回</button>
    <h1 id="editor-title">图片</h1>
    <button class="btn-icon" id="editor-settings">⚙</button>
    <button class="btn-icon" id="editor-export">导出</button>
  </header>
  <div id="canvas-wrap">
    <canvas id="editor-canvas"></canvas>
    <canvas id="magnifier" hidden></canvas>
    <div id="watermark-layer" hidden>
      <button id="watermark-close" aria-label="移除水印">×</button>
      <span class="watermark-text">PicDim</span>
    </div>
    <div id="editor-fab">
      <button id="btn-layer-up" title="上移一层">⬆️</button>
      <button id="btn-layer-down" title="下移一层">⬇️</button>
      <button id="btn-mode-toggle" title="平移模式（点击开启点画）">🤚</button>
      <button id="btn-add-ruler" title="创建标尺">📏</button>
      <button id="btn-add-text" title="创建文字">T</button>
    </div>
  </div>
  <div class="editor-footer">
    <button class="btn-wide" id="btn-undo">撤销</button>
    <button id="btn-zoom-out">−</button>
    <span class="zoom-label" id="zoom-label">1.0x</span>
    <button id="btn-zoom-in">＋</button>
    <button class="btn-wide" id="btn-clear">清空</button>
  </div>
</div>

<div class="modal" id="modal-value" hidden>
  <div class="sheet">
    <h3 id="value-title">输入尺寸</h3>
    <input type="text" id="value-input" inputmode="decimal" placeholder="例如 1200" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
    <div class="unit-bar" id="value-unit-bar"></div>
    <div class="style-section" style="margin-top:4px;margin-bottom:14px;">
      <div class="style-label">
        <span id="value-color-label">线色</span>
        <button class="more-style-btn" id="value-more-style">更多样式 ›</button>
      </div>
      <div class="color-grid" id="value-line-color-grid"></div>
    </div>
    <div class="row">
      <button data-action="cancel">取消</button>
      <button data-action="confirm" class="primary">确定</button>
    </div>
  </div>
</div>

<div class="modal" id="modal-menu" hidden><div class="sheet"></div></div>

<div class="modal" id="modal-style" hidden>
  <div class="sheet">
    <h3>标注样式</h3>
    <div class="style-preview"><canvas id="style-preview-canvas" width="280" height="80"></canvas></div>
    <div class="style-section">
      <div class="style-label" id="style-line-color-label">线的颜色</div>
      <div class="color-grid" id="line-color-grid"></div>
    </div>
    <div class="style-section" id="style-weight-section">
      <div class="style-label">线的粗细</div>
      <div class="slider-row">
        <span style="font-size:13px;color:#8e8e93;">细</span>
        <input type="range" id="line-weight-slider" min="0.5" max="3" step="0.1" value="1">
        <span class="weight-val" id="line-weight-val">1.0x</span>
      </div>
    </div>
    <div class="style-section" id="style-endpoint-section">
      <div class="style-label">端点款式</div>
      <div class="endpoint-grid" id="endpoint-grid"></div>
    </div>
    <div class="style-section" id="style-labelpos-section">
      <div class="style-label">标签位置</div>
      <div class="label-pos-grid" id="label-pos-grid">
        <button class="label-pos-btn" data-pos="above">上方</button>
        <button class="label-pos-btn" data-pos="middle">中间</button>
        <button class="label-pos-btn" data-pos="below">下方</button>
      </div>
    </div>
    <div class="style-section">
      <div class="style-label">
        <span>文字颜色</span>
        <label style="display:flex;align-items:center;font-size:13px;color:#8e8e93;">
          <input type="checkbox" id="text-same-color" style="accent-color:#0a84ff;margin-right:6px;">
          跟随主色
        </label>
      </div>
      <div class="color-grid" id="text-color-grid"></div>
    </div>
    <div class="style-section">
      <div class="style-label">文字大小</div>
      <div class="slider-row">
        <span style="font-size:13px;color:#8e8e93;">小</span>
        <input type="range" id="font-size-slider" min="0.5" max="2" step="0.1" value="1">
        <span class="weight-val" id="font-size-val">1.0x</span>
      </div>
    </div>
    <div class="toggle-row" id="style-showvalue-section">
      <span>显示数值</span>
      <input type="checkbox" id="show-value-toggle" checked>
    </div>
    <div class="row" style="margin-top:16px;">
      <button data-action="cancel">取消</button>
      <button data-action="apply" class="primary">应用</button>
    </div>
  </div>
</div>

<div class="modal" id="modal-editor-settings" hidden>
  <div class="sheet">
    <h3>设置</h3>
    <div class="toggle-row">
      <div class="label-group">
        <span>端点吸附</span>
        <span class="hint">拖动端点靠近其它端点时自动对齐</span>
      </div>
      <input type="checkbox" id="setting-snap">
    </div>
    <div class="toggle-row">
      <div class="label-group">
        <span>显示图片边界</span>
        <span class="hint">图片外编辑标注时，用虚线标出原图范围</span>
      </div>
      <input type="checkbox" id="setting-show-border">
    </div>
    <div class="toggle-row">
      <div class="label-group">
        <span>显示水印</span>
        <span class="hint">导出图片时在左上角标注 PicDim</span>
      </div>
      <input type="checkbox" id="setting-watermark">
    </div>
    <div class="toggle-row">
      <div class="label-group">
        <span>重置视图</span>
        <span class="hint">恢复到 1.0x 缩放，位置居中</span>
      </div>
      <button id="setting-reset-view" style="background:#2c2c2e;color:#0a84ff;border:none;padding:8px 14px;border-radius:8px;font-size:14px;cursor:pointer;">重置</button>
    </div>
    <div class="row" style="margin-top:16px;">
      <button data-action="close" class="primary">完成</button>
    </div>
  </div>
</div>

<div class="modal" id="modal-general-settings" hidden>
  <div class="sheet">
    <h3>设置</h3>
    <div class="style-section">
      <div class="style-label">排序方式</div>
      <div class="sort-grid" id="sort-grid">
        <button class="sort-btn" data-sort="createdDesc">后创建在前</button>
        <button class="sort-btn" data-sort="createdAsc">先创建在前</button>
        <button class="sort-btn" data-sort="nameAsc">名称 A-Z</button>
        <button class="sort-btn" data-sort="nameDesc">名称 Z-A</button>
      </div>
    </div>
    <div class="style-section" id="view-mode-section">
      <div class="style-label">显示方式</div>
      <div class="view-mode-grid" id="view-mode-grid">
        <button class="view-mode-btn" data-mode="list">列表</button>
        <button class="view-mode-btn" data-mode="grid">网格</button>
      </div>
    </div>
    <div class="row" style="margin-top:8px;">
      <button data-action="close" class="primary">完成</button>
    </div>
  </div>
</div>

<div class="modal" id="modal-prompt" hidden>
  <div class="sheet">
    <h3 id="prompt-title">输入</h3>
    <input type="text" id="prompt-input">
    <div class="row">
      <button data-action="cancel">取消</button>
      <button data-action="confirm" class="primary">确定</button>
    </div>
  </div>
</div>

<div id="toast"></div>
<div class="spinner" id="spinner" hidden><div class="ring"></div><div id="spinner-text">处理中…</div></div>

<script>
'use strict';

document.addEventListener('gesturestart', e => e.preventDefault(), { passive: false });
document.addEventListener('gesturechange', e => e.preventDefault(), { passive: false });
document.addEventListener('gestureend', e => e.preventDefault(), { passive: false });
document.addEventListener('touchmove', e => {
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });

(function setupKeyboardAdjust() {
  const vv = window.visualViewport;
  if (!vv) return;
  const root = document.documentElement;
  let last = -1;
  function adjust() {
    const layoutH = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
    let kb = layoutH - vv.height - (vv.offsetTop || 0);
    if (kb < 0) kb = 0;
    if (kb < 60) kb = 0;
    if (kb === last) return;
    last = kb;
    root.style.setProperty('--kb', kb + 'px');
  }
  vv.addEventListener('resize', adjust);
  vv.addEventListener('scroll', adjust);
  adjust();
})();

const $ = s => document.querySelector(s);
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const clamp = (v, a, b) => Math.min(Math.max(v, a), b);
const escapeHtml = s => String(s).replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function loadImage(src) {
  return new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = function() { rej(new Error('图片解码失败')); };
    img.src = src;
  });
}

/* 从 Blob/File 通过 FileReader.readAsDataURL 加载图片。
   出错时抛出带具体信息的 Error，便于诊断。 */
function loadImageFromBlob(blob) {
  return new Promise((res, rej) => {
    if (!blob) { rej(new Error('blob 为 null')); return; }
    if (typeof blob.size !== 'number') {
      rej(new Error('不是 Blob 对象，类型=' + Object.prototype.toString.call(blob)));
      return;
    }
    if (blob.size === 0) { rej(new Error('文件大小为 0')); return; }

    const reader = new FileReader();
    reader.onload = function() {
      const dataUrl = reader.result;
      if (typeof dataUrl !== 'string' || dataUrl.length < 20) {
        rej(new Error('DataURL 为空或过短，长度=' + (dataUrl && dataUrl.length)));
        return;
      }
      const img = new Image();
      img.onload = function() { res(img); };
      img.onerror = function() {
        rej(new Error(
          '图片解码失败。size=' + blob.size +
          ' type=' + (blob.type || '(空)') +
          ' dataUrlLen=' + dataUrl.length +
          ' 前缀=' + dataUrl.slice(0, 40)
        ));
      };
      img.src = dataUrl;
    };
    reader.onerror = function() {
      const err = reader.error;
      rej(new Error('FileReader 错误：' + (err && (err.name + ' ' + err.message) || '未知')));
    };
    reader.onabort = function() { rej(new Error('FileReader 被中止')); };
    try { reader.readAsDataURL(blob); }
    catch (e) { rej(new Error('readAsDataURL 抛出：' + (e && e.message || e))); }
  });
}

function roundRect(c, x, y, w, h, r) {
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}
let toastTimer;
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2000);
}
function busy(on, text) {
  $('#spinner-text').textContent = text || '处理中…';
  $('#spinner').hidden = !on;
}

async function download(blob, name) {
  const type = blob.type || 'application/octet-stream';
  if (navigator.canShare && navigator.share) {
    try {
      const file = new File([blob], name, { type });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: name });
        return;
      }
    } catch (e) {
      if (e && e.name === 'AbortError') return;
    }
  }
  try {
    const u = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = u;
    a.download = name;
    a.rel = 'noopener';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(u), 60000);
    return;
  } catch (_) {}
  try {
    const u = URL.createObjectURL(blob);
    const w = window.open(u, '_blank');
    if (!w) toast('无法自动保存，请检查分享/存储权限');
    else toast('长按图片可保存到相册');
    setTimeout(() => URL.revokeObjectURL(u), 120000);
  } catch (e) {
    toast('导出失败：' + (e && e.message || '未知错误'));
  }
}

function sanitizeName(s) {
  return String(s || '未命名').replace(/[\/\\:*?"<>|]/g, '_').trim() || '未命名';
}
function timestamp() {
  const d = new Date();
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}

const viewPrefs = {
  home: localStorage.getItem('sn_view_home') || 'list',
  folder: localStorage.getItem('sn_view_folder') || 'list',
};
function setViewPref(key, mode) {
  viewPrefs[key] = mode;
  localStorage.setItem('sn_view_' + key, mode);
}

function getSortMode() { return localStorage.getItem('sn_sort') || 'createdDesc'; }
function setSortMode(m) { localStorage.setItem('sn_sort', m); }
function sortProjects(list) {
  const mode = getSortMode();
  const arr = list.slice();
  switch (mode) {
    case 'createdAsc':  arr.sort((a, b) => a.createdAt - b.createdAt); break;
    case 'nameAsc':     arr.sort((a, b) => a.name.localeCompare(b.name, 'zh')); break;
    case 'nameDesc':    arr.sort((a, b) => b.name.localeCompare(a.name, 'zh')); break;
    case 'createdDesc':
    default:            arr.sort((a, b) => b.createdAt - a.createdAt);
  }
  return arr;
}

const FOLDER_CREATED_KEY = 'sn_folder_created';
function getFolderCreatedMap() {
  try { return JSON.parse(localStorage.getItem(FOLDER_CREATED_KEY) || '{}'); }
  catch (e) { return {}; }
}
function saveFolderCreatedMap(m) { localStorage.setItem(FOLDER_CREATED_KEY, JSON.stringify(m)); }
function setFolderCreatedAt(name, t) {
  const m = getFolderCreatedMap(); m[name] = t; saveFolderCreatedMap(m);
}
function removeFolderCreatedAt(name) {
  const m = getFolderCreatedMap(); delete m[name]; saveFolderCreatedMap(m);
}
function renameFolderCreatedAt(oldName, newName) {
  const m = getFolderCreatedMap();
  if (m[oldName]) { m[newName] = m[oldName]; delete m[oldName]; saveFolderCreatedMap(m); }
}
function getFolderCreatedAt(name) {
  const m = getFolderCreatedMap();
  if (m[name]) return m[name];
  let minT = Infinity;
  for (const p of state.projects) {
    if (p.folderName === name) minT = Math.min(minT, p.createdAt || 0);
  }
  if (minT !== Infinity) return minT;
  return 0;
}
function sortFolders(entries) {
  const mode = getSortMode();
  entries.sort((a, b) => {
    if (a.key === '' && b.key !== '') return 1;
    if (b.key === '' && a.key !== '') return -1;
    if (mode === 'nameAsc') return a.displayName.localeCompare(b.displayName, 'zh');
    if (mode === 'nameDesc') return b.displayName.localeCompare(a.displayName, 'zh');
    const ta = getFolderCreatedAt(a.key);
    const tb = getFolderCreatedAt(b.key);
    if (mode === 'createdAsc') return ta - tb;
    return tb - ta;
  });
  return entries;
}

const editorPrefs = {
  snap: localStorage.getItem('sn_snap') !== '0',
  showBorder: localStorage.getItem('sn_showBorder') !== '0',
  watermark: localStorage.getItem('sn_watermark') !== '0',
};
function saveEditorPrefs() {
  localStorage.setItem('sn_snap', editorPrefs.snap ? '1' : '0');
  localStorage.setItem('sn_showBorder', editorPrefs.showBorder ? '1' : '0');
  localStorage.setItem('sn_watermark', editorPrefs.watermark ? '1' : '0');
}

const fileInput = $('#file-input');
let fileInputCallback = null;
fileInput.addEventListener('change', () => {
  const files = Array.from(fileInput.files || []);
  fileInput.value = '';
  const cb = fileInputCallback;
  fileInputCallback = null;
  if (cb) cb(files);
});
function pickFiles(callback) {
  fileInputCallback = callback;
  fileInput.click();
}

function defaultImageName(existing) {
  existing = existing || [];
  const d = new Date();
  const p = n => String(n).padStart(2, '0');
  const base = `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
  if (!existing.length) return base;
  const names = new Set(existing.map(im => im.name).filter(Boolean));
  if (!names.has(base)) return base;
  let i = 2;
  while (names.has(`${base} (${i})`)) i++;
  return `${base} (${i})`;
}

const FOLDERS_KEY = 'sn_extra_folders';
function getExtraFolders() {
  try { return JSON.parse(localStorage.getItem(FOLDERS_KEY) || '[]'); }
  catch (e) { return []; }
}
function saveExtraFolders(list) { localStorage.setItem(FOLDERS_KEY, JSON.stringify(list)); }
function addExtraFolder(name) {
  const list = getExtraFolders();
  if (!list.includes(name)) {
    list.push(name); saveExtraFolders(list);
    const m = getFolderCreatedMap();
    if (!m[name]) setFolderCreatedAt(name, Date.now());
  }
}
function removeExtraFolder(name) {
  saveExtraFolders(getExtraFolders().filter(x => x !== name));
  removeFolderCreatedAt(name);
}
function renameExtraFolder(old, newName) {
  const list = getExtraFolders();
  const idx = list.indexOf(old);
  if (idx >= 0) {
    if (newName && !list.includes(newName)) list[idx] = newName;
    else list.splice(idx, 1);
    saveExtraFolders(list);
  }
  renameFolderCreatedAt(old, newName);
}
function getAllFolders() {
  const set = new Set();
  for (const p of state.projects) if (p.folderName) set.add(p.folderName);
  for (const f of getExtraFolders()) if (f) set.add(f);
  return [...set].sort((a, b) => a.localeCompare(b, 'zh'));
}

const COLORS = [
  { id: 'red', css: '#ff3b30' }, { id: 'blue', css: '#0a84ff' },
  { id: 'green', css: '#34c759' }, { id: 'orange', css: '#ff9500' },
  { id: 'purple', css: '#af52de' }, { id: 'teal', css: '#5ac8fa' },
  { id: 'pink', css: '#ff2d55' }, { id: 'black', css: '#1c1c1e' },
];
const colorById = id => COLORS.find(c => c.id === id) || COLORS[0];

const ENDPOINT_STYLES = [
  { id: 'circle', label: '空心圆' },
  { id: 'dot',    label: '实心圆' },
  { id: 'square', label: '方块' },
  { id: 'arrow',  label: '箭头' },
  { id: 'tick',   label: '竖线' },
  { id: 'none',   label: '无' },
];

const styleDefault = {
  color: localStorage.getItem('sn_color') || 'red',
  weight: parseFloat(localStorage.getItem('sn_weight') || '1'),
  showValue: localStorage.getItem('sn_showValue') !== '0',
  endpoint: localStorage.getItem('sn_endpoint') || 'circle',
  fontSize: parseFloat(localStorage.getItem('sn_fontSize') || '1'),
  textColorSame: localStorage.getItem('sn_textColorSame') !== '0',
  textColor: localStorage.getItem('sn_textColor') || 'red',
  labelPos: localStorage.getItem('sn_labelPos') || 'above',
};
function saveStyleDefault() {
  localStorage.setItem('sn_color', styleDefault.color);
  localStorage.setItem('sn_weight', String(styleDefault.weight));
  localStorage.setItem('sn_showValue', styleDefault.showValue ? '1' : '0');
  localStorage.setItem('sn_endpoint', styleDefault.endpoint);
  localStorage.setItem('sn_fontSize', String(styleDefault.fontSize));
  localStorage.setItem('sn_textColorSame', styleDefault.textColorSame ? '1' : '0');
  localStorage.setItem('sn_textColor', styleDefault.textColor);
  localStorage.setItem('sn_labelPos', styleDefault.labelPos);
}
function syncStyleDefault(style) {
  if (!style) return;
  styleDefault.color = style.color;
  styleDefault.weight = style.weight;
  styleDefault.endpoint = style.endpointStyle;
  styleDefault.fontSize = style.fontSize;
  styleDefault.showValue = style.showValue;
  styleDefault.textColorSame = style.textColorSame;
  styleDefault.textColor = style.textColor;
  styleDefault.labelPos = style.labelPos;
  saveStyleDefault();
}

const DB = (function() {
  let db;
  function open() {
    return new Promise((res, rej) => {
      const r = indexedDB.open('sizesnap', 1);
      r.onupgradeneeded = e => {
        const d = e.target.result;
        if (!d.objectStoreNames.contains('projects')) {
          d.createObjectStore('projects', { keyPath: 'id' });
        }
      };
      r.onsuccess = e => { db = e.target.result; res(); };
      r.onerror = e => rej(e.target.error);
    });
  }
  const st = m => db.transaction('projects', m).objectStore('projects');
  return {
    async init() { if (!db) await open(); },
    all() { return new Promise((res, rej) => {
      const r = st('readonly').getAll();
      r.onsuccess = () => res(r.result || []); r.onerror = () => rej(r.error);
    });},
    put(p) { return new Promise((res, rej) => {
      const r = st('readwrite').put(p);
      r.onsuccess = () => res(); r.onerror = () => rej(r.error);
    });},
    get(id) { return new Promise((res, rej) => {
      const r = st('readonly').get(id);
      r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
    });},
    del(id) { return new Promise((res, rej) => {
      const r = st('readwrite').delete(id);
      r.onsuccess = () => res(); r.onerror = () => rej(r.error);
    });},
  };
})();

function migrateProject(p) {
  if (p.images && Array.isArray(p.images)) {
    p.images = p.images.map(im => {
      const merged = Object.assign({}, im);
      merged.id = merged.id || uid();
      merged.name = merged.name || defaultImageName();
      merged.annotations = (merged.annotations || []).map(a => {
        const aa = Object.assign({}, a);
        aa.type = aa.type || 'line';
        return aa;
      });
      return merged;
    });
    return p;
  }
  if (p.imageBlob) {
    return {
      id: p.id, name: p.name,
      folderName: p.folderName || '',
      createdAt: p.createdAt || Date.now(),
      updatedAt: p.updatedAt || Date.now(),
      images: [{
        id: uid(), name: defaultImageName(),
        imageBlob: p.imageBlob,
        thumbUrl: p.thumbUrl || '',
        width: p.imageWidth || 0,
        height: p.imageHeight || 0,
        annotations: (p.annotations || []).map(a => Object.assign({}, a, { type: a.type || 'line' })),
      }],
    };
  }
  const out = Object.assign({}, p);
  out.images = p.images || [];
  return out;
}

function projectImageCount(p) { return (p.images || []).length; }
function projectAnnotationCount(p) {
  return (p.images || []).reduce((n, im) => n + ((im.annotations && im.annotations.length) || 0), 0);
}
function projectFirstThumb(p) {
  const first = (p.images || [])[0];
  return (first && first.thumbUrl) || '';
}

const CRC_TABLE = (function() {
  const t = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    t[i] = c >>> 0;
  }
  return t;
})();
function crc32(bytes) {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}

function buildZip(files) {
  const enc = new TextEncoder();
  const chunks = [];
  const central = [];
  let offset = 0;
  let totalDataSize = 0, maxSingleSize = 0;
  for (const f of files) {
    totalDataSize += f.data.length;
    if (f.data.length > maxSingleSize) maxSingleSize = f.data.length;
  }
  const needsZip64 =
    maxSingleSize >= 0xFFFFFFFF || totalDataSize >= 0xFFFFFFFF || files.length >= 0xFFFF;

  for (const f of files) {
    const nameBytes = enc.encode(f.path);
    const data = f.data;
    const crc = crc32(data);
    const size = data.length;
    const useZip64 = needsZip64;
    const lfhExtraLen = useZip64 ? 20 : 0;
    const lfh = new Uint8Array(30 + nameBytes.length + lfhExtraLen);
    const dv = new DataView(lfh.buffer);
    dv.setUint32(0, 0x04034b50, true);
    dv.setUint16(4, useZip64 ? 45 : 20, true);
    dv.setUint16(6, 0x0800, true);
    dv.setUint16(8, 0, true);
    dv.setUint16(10, 0, true);
    dv.setUint16(12, 0, true);
    dv.setUint32(14, crc, true);
    dv.setUint32(18, useZip64 ? 0xFFFFFFFF : size, true);
    dv.setUint32(22, useZip64 ? 0xFFFFFFFF : size, true);
    dv.setUint16(26, nameBytes.length, true);
    dv.setUint16(28, lfhExtraLen, true);
    lfh.set(nameBytes, 30);
    if (useZip64) {
      const ev = new DataView(lfh.buffer, 30 + nameBytes.length, 20);
      ev.setUint16(0, 0x0001, true); ev.setUint16(2, 16, true);
      ev.setUint32(4, size >>> 0, true);
      ev.setUint32(8, Math.floor(size / 0x100000000), true);
      ev.setUint32(12, size >>> 0, true);
      ev.setUint32(16, Math.floor(size / 0x100000000), true);
    }
    chunks.push(lfh, data);
    const cdExtraLen = useZip64 ? 28 : 0;
    const cd = new Uint8Array(46 + nameBytes.length + cdExtraLen);
    const dv2 = new DataView(cd.buffer);
    dv2.setUint32(0, 0x02014b50, true);
    dv2.setUint16(4, useZip64 ? 45 : 20, true);
    dv2.setUint16(6, useZip64 ? 45 : 20, true);
    dv2.setUint16(8, 0x0800, true);
    dv2.setUint16(10, 0, true); dv2.setUint16(12, 0, true); dv2.setUint16(14, 0, true);
    dv2.setUint32(16, crc, true);
    dv2.setUint32(20, useZip64 ? 0xFFFFFFFF : size, true);
    dv2.setUint32(24, useZip64 ? 0xFFFFFFFF : size, true);
    dv2.setUint16(28, nameBytes.length, true);
    dv2.setUint16(30, cdExtraLen, true);
    dv2.setUint16(32, 0, true); dv2.setUint16(34, 0, true); dv2.setUint16(36, 0, true);
    dv2.setUint32(38, 0, true);
    dv2.setUint32(42, useZip64 ? 0xFFFFFFFF : offset, true);
    cd.set(nameBytes, 46);
    if (useZip64) {
      const ev = new DataView(cd.buffer, 46 + nameBytes.length, 28);
      ev.setUint16(0, 0x0001, true); ev.setUint16(2, 24, true);
      ev.setUint32(4, size >>> 0, true);
      ev.setUint32(8, Math.floor(size / 0x100000000), true);
      ev.setUint32(12, size >>> 0, true);
      ev.setUint32(16, Math.floor(size / 0x100000000), true);
      ev.setUint32(20, offset >>> 0, true);
      ev.setUint32(24, Math.floor(offset / 0x100000000), true);
    }
    central.push(cd);
    offset += lfh.length + size;
  }
  const cdSize = central.reduce((a, b) => a + b.length, 0);
  if (needsZip64) {
    const z64 = new Uint8Array(56);
    const dv = new DataView(z64.buffer);
    dv.setUint32(0, 0x06064b50, true); dv.setUint32(4, 44, true);
    dv.setUint32(8, 0, true);
    dv.setUint16(12, 45, true); dv.setUint16(14, 45, true);
    dv.setUint32(16, 0, true); dv.setUint32(20, 0, true);
    dv.setUint32(24, files.length >>> 0, true);
    dv.setUint32(28, Math.floor(files.length / 0x100000000), true);
    dv.setUint32(32, files.length >>> 0, true);
    dv.setUint32(36, Math.floor(files.length / 0x100000000), true);
    dv.setUint32(40, cdSize >>> 0, true);
    dv.setUint32(44, Math.floor(cdSize / 0x100000000), true);
    dv.setUint32(48, offset >>> 0, true);
    dv.setUint32(52, Math.floor(offset / 0x100000000), true);
    const locator = new Uint8Array(20);
    const dvl = new DataView(locator.buffer);
    dvl.setUint32(0, 0x07064b50, true); dvl.setUint32(4, 0, true);
    const z64Off = offset + cdSize;
    dvl.setUint32(8, z64Off >>> 0, true);
    dvl.setUint32(12, Math.floor(z64Off / 0x100000000), true);
    dvl.setUint32(16, 1, true);
    const eocd = new Uint8Array(22);
    const dve = new DataView(eocd.buffer);
    dve.setUint32(0, 0x06054b50, true);
    dve.setUint16(4, 0, true); dve.setUint16(6, 0, true);
    dve.setUint16(8, 0xFFFF, true); dve.setUint16(10, 0xFFFF, true);
    dve.setUint32(12, 0xFFFFFFFF, true); dve.setUint32(16, 0xFFFFFFFF, true);
    dve.setUint16(20, 0, true);
    return new Blob([...chunks, ...central, z64, locator, eocd], { type: 'application/zip' });
  }
  const eocd = new Uint8Array(22);
  const dv3 = new DataView(eocd.buffer);
  dv3.setUint32(0, 0x06054b50, true); dv3.setUint16(4, 0, true);
  dv3.setUint16(6, 0, true); dv3.setUint16(8, files.length, true);
  dv3.setUint16(10, files.length, true); dv3.setUint32(12, cdSize, true);
  dv3.setUint32(16, offset, true); dv3.setUint16(20, 0, true);
  return new Blob([...chunks, ...central, eocd], { type: 'application/zip' });
}

const state = {
  projects: [], search: '', currentFolder: undefined, current: null,
  currentImage: null, image: null, annotations: [], history: [],
  pendingStart: null, dragCurrent: null, snapLines: { x: null, y: null },
  zoom: 1.0, panX: 0, panY: 0, editMode: 'pan', selectedAnnotationId: null,
  multiSelect: false, selectedFolders: new Set(), settingsContext: 'home',
};

let dashAnimOffset = 0;

(function startDashLoop() {
  function loop() {
    dashAnimOffset = (dashAnimOffset + 1) % 1000;
    if (!$('#view-editor').hidden && state.selectedAnnotationId) renderCanvas();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();

function showHome() {
  state.currentFolder = undefined;
  $('#view-list').hidden = false;
  $('#view-folder').hidden = true;
  $('#view-project').hidden = true;
  $('#view-editor').hidden = true;
  state.multiSelect = false;
  state.selectedFolders.clear();
  renderHome(); updateHomeHeader(); updateHomeSelectionBar();
}
function showFolder() {
  $('#view-list').hidden = true;
  $('#view-folder').hidden = false;
  $('#view-project').hidden = true;
  $('#view-editor').hidden = true;
  renderFolderPage();
}
function showProject() {
  $('#view-list').hidden = true;
  $('#view-folder').hidden = true;
  $('#view-project').hidden = false;
  $('#view-editor').hidden = true;
}
function showEditor() {
  $('#view-list').hidden = true;
  $('#view-folder').hidden = true;
  $('#view-project').hidden = true;
  $('#view-editor').hidden = false;
}

function renderHome() {
  const root = $('#home-content');
  const q = state.search.trim().toLowerCase();
  const groups = new Map();
  for (const p of sortProjects(state.projects)) {
    const key = p.folderName || '';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(p);
  }
  for (const f of getExtraFolders()) {
    if (!groups.has(f)) groups.set(f, []);
    const m = getFolderCreatedMap();
    if (!m[f]) setFolderCreatedAt(f, Date.now());
  }
  let entries = [...groups.entries()].map(([key, list]) => ({
    key, displayName: key || '未分类', list,
    count: list.length,
    cover: list.length ? projectFirstThumb(list[0]) : '',
    icon: key ? '📁' : '🗂',
  }));
  entries = sortFolders(entries);
  if (q) entries = entries.filter(e => e.displayName.toLowerCase().includes(q));

  const showAddBtn = !q && !state.multiSelect;
  if (!entries.length && !showAddBtn) {
    root.className = 'scroll-list';
    root.innerHTML = `<div class="empty">
      <div class="icon">🔍</div>
      <h2>没有匹配的项目</h2>
    </div>`;
    return;
  }
  const inMulti = state.multiSelect;
  if (viewPrefs.home === 'grid') {
    root.className = 'scroll-list mode-grid' + (inMulti ? ' has-bottombar' : '');
    let html = entries.map(e => {
      const sel = state.selectedFolders.has(e.key);
      return `<div class="folder-card ${sel ? 'selected' : ''}" data-key="${escapeHtml(e.key)}">
        ${inMulti ? `<div class="checkbox-card"></div>` : ''}
        <div class="folder-cover">
          ${e.cover ? `<img src="${e.cover}" alt="">` : `<span>${e.icon}</span>`}
        </div>
        <div class="folder-card-name">${escapeHtml(e.displayName)}</div>
        <div class="folder-card-count">${e.count} 个房间</div>
      </div>`;
    }).join('');
    if (showAddBtn) {
      html += `<div class="add-card" id="home-add-card">
        <div class="add-cover"><div>＋</div></div>
        <div class="add-label">新建项目</div>
      </div>`;
    }
    root.innerHTML = html;
    bindFolderInteractions(root);
    const addCard = $('#home-add-card');
    if (addCard) addCard.onclick = createFolder;
  } else {
    root.className = 'scroll-list' + (inMulti ? ' has-bottombar' : '');
    let html = entries.map(e => {
      const sel = state.selectedFolders.has(e.key);
      return `<div class="folder-row ${sel ? 'selected' : ''}" data-key="${escapeHtml(e.key)}">
        ${inMulti ? `<div class="checkbox"></div>` : ''}
        <div class="folder-thumb">
          ${e.cover ? `<img src="${e.cover}" alt="">` : `<span>${e.icon}</span>`}
        </div>
        <div class="info">
          <div class="name">${escapeHtml(e.displayName)}</div>
          <div class="meta">${e.count} 个房间</div>
        </div>
        ${inMulti ? '' : '<div class="chevron">›</div>'}
      </div>`;
    }).join('');
    if (showAddBtn) {
      html += `<div class="add-row" id="home-add-row">
        <div class="add-thumb">＋</div>
        <div class="info"><div class="name">新建项目</div></div>
      </div>`;
    }
    root.innerHTML = html;
    bindFolderInteractions(root);
    const addRow = $('#home-add-row');
    if (addRow) addRow.onclick = createFolder;
  }
}

function bindFolderInteractions(root) {
  root.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    el.addEventListener('click', () => {
      if (state.multiSelect) {
        if (state.selectedFolders.has(key)) state.selectedFolders.delete(key);
        else state.selectedFolders.add(key);
        renderHome(); updateHomeHeader(); updateHomeSelectionBar();
        return;
      }
      openFolder(key === '' ? null : key);
    });
    if (!state.multiSelect) {
      let timer = null, fired = false;
      el.addEventListener('pointerdown', () => {
        fired = false;
        timer = setTimeout(() => {
          fired = true;
          showGroupMenu(key === '' ? null : key);
        }, 500);
      });
      const cancel = () => clearTimeout(timer);
      el.addEventListener('pointerup', cancel);
      el.addEventListener('pointermove', cancel);
      el.addEventListener('pointercancel', cancel);
      el.addEventListener('pointerleave', cancel);
    }
  });
}

function updateHomeHeader() {
  const l = $('#list-left'), r = $('#list-right'), t = $('#list-title');
  if (state.multiSelect) {
    const n = state.selectedFolders.size;
    t.textContent = n > 0 ? `已选 ${n}` : '选择项目';
    l.innerHTML = `<button class="btn-icon" id="btn-cancel-multi">取消</button>`;
    r.innerHTML = `<button class="btn-icon" id="btn-select-all">全选</button>`;
    $('#btn-cancel-multi').onclick = () => {
      state.multiSelect = false;
      state.selectedFolders.clear();
      renderHome(); updateHomeHeader(); updateHomeSelectionBar();
    };
    $('#btn-select-all').onclick = () => {
      const all = collectVisibleFolderKeys();
      if (state.selectedFolders.size === all.length) state.selectedFolders.clear();
      else state.selectedFolders = new Set(all);
      renderHome(); updateHomeHeader(); updateHomeSelectionBar();
    };
    return;
  }
  t.textContent = '图寸';
  l.innerHTML = `<button class="btn-icon" id="btn-more">⋯</button>`;
  r.innerHTML = `
    <button class="btn-icon" id="btn-search">🔍</button>
    <button class="btn-icon" id="btn-multi">☑</button>
    <button class="btn-icon" id="btn-settings">⚙</button>
  `;
  $('#btn-search').onclick = () => {
    const bar = $('#search-bar');
    bar.hidden = !bar.hidden;
    if (!bar.hidden) setTimeout(() => $('#search-input').focus(), 50);
    else { state.search = ''; $('#search-input').value = ''; renderHome(); }
  };
  $('#btn-multi').onclick = () => {
    state.multiSelect = true;
    state.selectedFolders.clear();
    renderHome(); updateHomeHeader(); updateHomeSelectionBar();
  };
  $('#btn-settings').onclick = () => openGeneralSettings('home');
  $('#btn-more').onclick = () => {
    showMenu('更多', [
      { label: '📁 新建项目', action: createFolder },
      { label: '📷 新建房间（未分类，选图）', action: () => createProjectWithFiles(null) },
      { label: '📦 导出全部 ZIP', action: () => {
        if (!state.projects.length) { toast('还没有房间'); return; }
        exportProjectsAsZip(state.projects, '全部');
      }},
    ]);
  };
}

function collectVisibleFolderKeys() {
  const keys = [];
  $('#home-content').querySelectorAll('[data-key]').forEach(el => {
    keys.push(el.dataset.key);
  });
  return keys;
}
function updateHomeSelectionBar() {
  const bar = $('#home-selection-bar');
  const n = state.selectedFolders.size;
  bar.hidden = !(state.multiSelect && n > 0);
  bar.querySelector('[data-action="batch-delete"]').textContent = `删除 (${n})`;
  bar.querySelector('[data-action="batch-export-zip"]').textContent = `导出 ZIP (${n})`;
}

$('#home-selection-bar').addEventListener('click', async e => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const action = btn.dataset.action;
  const keys = [...state.selectedFolders];
  if (!keys.length) return;
  const rooms = state.projects.filter(p => keys.includes(p.folderName || ''));

  if (action === 'batch-delete') {
    if (!confirm(`删除选中的 ${keys.length} 个项目及其所有房间？`)) return;
    for (const key of keys) {
      const toDel = state.projects.filter(p => (p.folderName || '') === key);
      for (const r of toDel) await DB.del(r.id);
      if (key !== '') removeExtraFolder(key);
    }
    state.projects = state.projects.filter(p => !keys.includes(p.folderName || ''));
    state.multiSelect = false;
    state.selectedFolders.clear();
    renderHome(); updateHomeHeader(); updateHomeSelectionBar();
    toast('已删除');
  } else if (action === 'batch-export-zip') {
    if (!rooms.length) { toast('选中的项目里没有房间'); return; }
    exportProjectsAsZip(rooms, '批量');
  }
});

function openGeneralSettings(context) {
  state.settingsContext = context;
  const modal = $('#modal-general-settings');
  const grid = $('#sort-grid');
  const viewSection = $('#view-mode-section');
  const viewGrid = $('#view-mode-grid');

  function renderSortGrid() {
    const cur = getSortMode();
    grid.querySelectorAll('.sort-btn').forEach(el => {
      el.classList.toggle('active', el.dataset.sort === cur);
    });
  }
  renderSortGrid();
  grid.querySelectorAll('.sort-btn').forEach(el => {
    el.onclick = () => {
      setSortMode(el.dataset.sort);
      renderSortGrid();
      if (context === 'home') renderHome();
      else if (context === 'folder') renderFolderPage();
      toast('排序已更新');
    };
  });
  if (context === 'room') viewSection.hidden = true;
  else {
    viewSection.hidden = false;
    const prefKey = context === 'home' ? 'home' : 'folder';
    function renderViewGrid() {
      const cur = viewPrefs[prefKey];
      viewGrid.querySelectorAll('.view-mode-btn').forEach(el => {
        el.classList.toggle('active', el.dataset.mode === cur);
      });
    }
    renderViewGrid();
    viewGrid.querySelectorAll('.view-mode-btn').forEach(el => {
      el.onclick = () => {
        setViewPref(prefKey, el.dataset.mode);
        renderViewGrid();
        if (context === 'home') renderHome();
        else if (context === 'folder') renderFolderPage();
        toast('显示方式已更新');
      };
    });
  }
  modal.querySelector('[data-action="close"]').onclick = () => { modal.hidden = true; };
  modal.onclick = ev => { if (ev.target === modal) modal.hidden = true; };
  modal.hidden = false;
}

function showGroupMenu(folder) {
  const items = [
    { label: '📂 打开项目', action: () => openFolder(folder) },
    { label: '📷 在此新建房间（选图）', action: () => createProjectWithFiles(folder) },
    { label: '📦 导出此项目 ZIP', action: () => {
      const list = state.projects.filter(p => folder ? p.folderName === folder : !p.folderName);
      if (!list.length) { toast('此项目还没有房间'); return; }
      exportProjectsAsZip(list, folder || '未分类');
    }},
  ];
  if (folder) items.push(
    { label: '✏️ 重命名项目', action: () => renameFolder(folder) },
    { label: '🗑 删除项目（房间变未分类）', action: () => deleteFolder(folder), danger: true }
  );
  showMenu(folder ? `项目：${folder}` : '未分类', items);
}

async function renameFolder(old) {
  openPrompt('重命名项目', old, async val => {
    const trimmed = val.trim();
    if (!trimmed || trimmed === old) return;
    for (const p of state.projects) {
      if (p.folderName === old) { p.folderName = trimmed; p.updatedAt = Date.now(); await DB.put(p); }
    }
    renameExtraFolder(old, trimmed);
    if (state.currentFolder === old) state.currentFolder = trimmed;
    if (state.currentFolder === undefined) renderHome();
    else renderFolderPage();
    toast(`已重命名为「${trimmed}」`);
  });
}
async function deleteFolder(name) {
  if (!confirm(`删除项目「${name}」？房间会变为未分类。`)) return;
  for (const p of state.projects) {
    if (p.folderName === name) { p.folderName = ''; p.updatedAt = Date.now(); await DB.put(p); }
  }
  removeExtraFolder(name);
  if (state.currentFolder === name) { showHome(); return; }
  renderHome(); toast('已删除项目');
}
function createFolder() {
  openPrompt('新建项目', '', val => {
    const trimmed = val.trim();
    if (!trimmed) return;
    if (getAllFolders().includes(trimmed)) { toast('项目已存在'); return; }
    addExtraFolder(trimmed);
    renderHome();
    toast(`已创建「${trimmed}」`);
  });
}
function openFolder(folder) { state.currentFolder = folder; showFolder(); }

function renderFolderPage() {
  const folder = state.currentFolder;
  $('#folder-title').textContent = folder === null ? '未分类' : folder;
  const list = sortProjects(state.projects.filter(p =>
    folder === null ? !p.folderName : p.folderName === folder
  ));
  const content = $('#folder-content');

  if (viewPrefs.folder === 'grid') {
    content.className = 'scroll-list mode-grid';
    let html = list.map(p => {
      const thumb = projectFirstThumb(p);
      const imgCount = projectImageCount(p);
      return `<div class="project-card" data-id="${p.id}">
        <div class="project-cover">
          ${thumb ? `<img src="${thumb}" alt="">` : `<span>📦</span>`}
        </div>
        <div class="project-card-name">${escapeHtml(p.name)}</div>
        <div class="project-card-meta">${imgCount} 张图片</div>
      </div>`;
    }).join('');
    html += `<div class="add-card" id="folder-add-card">
      <div class="add-cover"><div>＋</div></div>
      <div class="add-label">新建房间</div>
    </div>`;
    content.innerHTML = html;
    const addCard = $('#folder-add-card');
    if (addCard) addCard.onclick = () => createProjectWithFiles(folder);
  } else {
    content.className = 'scroll-list';
    let html = list.map(p => {
      const thumb = projectFirstThumb(p);
      const imgCount = projectImageCount(p);
      const annCount = projectAnnotationCount(p);
      return `<div class="project-row" data-id="${p.id}">
        <img class="thumb" src="${thumb || ''}" alt="">
        <div class="info">
          <div class="name">${escapeHtml(p.name)}</div>
          <div class="meta">${imgCount} 张 · ${annCount} 个标注 · ${formatDate(p.updatedAt)}</div>
        </div>
      </div>`;
    }).join('');
    html += `<div class="add-row" id="folder-add-row">
      <div class="add-thumb">＋</div>
      <div class="info"><div class="name">新建房间</div></div>
    </div>`;
    content.innerHTML = html;
    const addRow = $('#folder-add-row');
    if (addRow) addRow.onclick = () => createProjectWithFiles(folder);
  }
  bindProjectInteractions(content);
}

function bindProjectInteractions(root) {
  root.querySelectorAll('[data-id]').forEach(el => {
    const id = el.dataset.id;
    el.addEventListener('click', () => openProject(id));
    let timer = null, fired = false;
    el.addEventListener('pointerdown', () => {
      fired = false;
      timer = setTimeout(() => { fired = true; showProjectMenu(id); }, 500);
    });
    const cancel = () => clearTimeout(timer);
    el.addEventListener('pointerup', cancel);
    el.addEventListener('pointermove', cancel);
    el.addEventListener('pointercancel', cancel);
    el.addEventListener('pointerleave', cancel);
  });
}

function showProjectMenu(id) {
  const p = state.projects.find(x => x.id === id);
  if (!p) return;
  showMenu(p.name, [
    { label: '📂 打开房间', action: () => openProject(p.id) },
    { label: '✏️ 重命名房间', action: () => {
      openPrompt('重命名房间', p.name, async val => {
        const t = val.trim();
        if (!t) return;
        p.name = t; p.updatedAt = Date.now();
        await DB.put(p);
        const pi = state.projects.findIndex(x => x.id === p.id);
        if (pi >= 0) state.projects[pi] = p;
        if (state.currentFolder !== undefined) renderFolderPage(); else renderHome();
        toast('已重命名');
      });
    }},
    { label: '📁 移动项目', action: () => showMovePicker(p) },
    { label: '🗑 删除房间', action: async () => {
      if (!confirm(`删除「${p.name}」及其所有图片？`)) return;
      await DB.del(p.id);
      state.projects = state.projects.filter(x => x.id !== p.id);
      if (state.currentFolder !== undefined) renderFolderPage(); else renderHome();
      toast('已删除');
    }, danger: true },
  ]);
}

function formatDate(ts) {
  const diff = Date.now() - ts;
  if (diff < 60000) return '刚刚';
  if (diff < 3600000) return `${Math.floor(diff / 60000)} 分钟前`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)} 小时前`;
  return new Date(ts).toLocaleDateString('zh-CN');
}

function showMenu(title, items) {
  const modal = $('#modal-menu');
  const sheet = modal.querySelector('.sheet');
  sheet.innerHTML = `<h3>${escapeHtml(title)}</h3>` +
    items.map((it, i) =>
      `<button class="menu-item ${it.danger ? 'danger' : ''}" data-i="${i}">${escapeHtml(it.label)}</button>`
    ).join('');
  modal.hidden = false;
  sheet.querySelectorAll('[data-i]').forEach(btn => {
    btn.onclick = () => { modal.hidden = true; items[+btn.dataset.i].action(); };
  });
  modal.onclick = e => { if (e.target === modal) modal.hidden = true; };
}
function openPrompt(title, initial, onConfirm) {
  const modal = $('#modal-prompt');
  $('#prompt-title').textContent = title;
  const input = $('#prompt-input');
  input.value = initial || '';
  modal.querySelector('[data-action="confirm"]').onclick = () => {
    modal.hidden = true; onConfirm(input.value);
  };
  modal.querySelector('[data-action="cancel"]').onclick = () => { modal.hidden = true; };
  modal.onclick = e => { if (e.target === modal) modal.hidden = true; };
  modal.hidden = false;
  setTimeout(() => { input.focus(); input.select(); }, 150);
}

function createProjectWithFiles(folder) {
  pickFiles(async files => {
    if (!files.length) return;
    busy(true, '导入中…');
    try {
      const images = [];
      const errors = [];
      for (const file of files) {
        try {
          const img = await loadImageFromBlob(file);
          let thumbUrl = '';
          try { thumbUrl = await makeThumb(file); } catch (e) { thumbUrl = ''; }
          images.push({
            id: uid(),
            name: defaultImageName(images),
            imageBlob: file,
            thumbUrl,
            width: img.naturalWidth,
            height: img.naturalHeight,
            annotations: [],
          });
        } catch (e) {
          const fname = (file && file.name) || '(无名字)';
          const fsize = (file && file.size);
          const ftype = (file && file.type);
          errors.push(`• ${fname}  [size=${fsize} type=${ftype || '空'}]\n  ${(e && e.message) || e}`);
        }
      }
      if (!images.length) {
        const detail = errors.length
          ? '全部导入失败（共 ' + errors.length + ' 张）\n\n' + errors.slice(0, 3).join('\n\n')
          : '没有成功导入的图片';
        alert(detail);
        return;
      }
      const p = {
        id: uid(),
        name: `房间 ${state.projects.length + 1}`,
        folderName: folder === null ? '' : (folder || ''),
        createdAt: Date.now(),
        updatedAt: Date.now(),
        images,
      };
      await DB.put(p);
      state.projects.unshift(p);
      if (state.currentFolder !== undefined) renderFolderPage(); else renderHome();
      openProject(p.id);
    } finally { busy(false); }
  });
}

async function makeThumb(blob) {
  const img = await loadImageFromBlob(blob);
  const S = 240;
  const c = document.createElement('canvas');
  c.width = S; c.height = S;
  const ctx2 = c.getContext('2d');
  ctx2.fillStyle = '#2c2c2e'; ctx2.fillRect(0, 0, S, S);
  const r = img.naturalWidth / img.naturalHeight;
  let w = S, h = S;
  if (r > 1) h = S / r; else w = S * r;
  ctx2.drawImage(img, (S - w) / 2, (S - h) / 2, w, h);
  return c.toDataURL('image/jpeg', 0.7);
}

$('#folder-back').onclick = () => { showHome(); };
$('#folder-settings').onclick = () => openGeneralSettings('folder');
$('#folder-more').onclick = () => {
  const folder = state.currentFolder;
  showMenu(folder === null ? '未分类' : `项目：${folder}`, [
    { label: '📷 新建房间（选图）', action: () => createProjectWithFiles(folder) },
    { label: '📦 导出此项目 ZIP', action: () => {
      const list = state.projects.filter(p =>
        folder === null ? !p.folderName : p.folderName === folder);
      if (!list.length) { toast('项目里还没有房间'); return; }
      exportProjectsAsZip(list, folder || '未分类');
    }},
    ...(folder ? [
      { label: '✏️ 重命名项目', action: () => renameFolder(folder) },
      { label: '🗑 删除项目', action: () => deleteFolder(folder), danger: true },
    ] : []),
  ]);
};

async function openProject(id) {
  const p = await DB.get(id);
  if (!p) return;
  state.current = migrateProject(p);
  renderProjectPage();
  showProject();
}

function renderProjectPage() {
  const p = state.current;
  if (!p) return;
  $('#project-title').textContent = p.name;
  const grid = $('#image-grid');
  let html = p.images.map((im, i) => {
    const annCount = (im.annotations && im.annotations.length) || 0;
    const badge = annCount ? `<div class="badge">${annCount}</div>` : '';
    const order = `<div class="order">${i + 1}</div>`;
    const name = escapeHtml(im.name || `图${i + 1}`);
    return `<div class="image-cell" data-index="${i}">
      <div class="thumb-wrap">
        <img src="${im.thumbUrl || ''}" alt="">
        ${order}${badge}
      </div>
      <div class="img-name" title="${name}">${name}</div>
    </div>`;
  }).join('');
  html += `<div class="image-cell add-image-cell" id="project-add-image-cell">
    <div class="thumb-wrap"><span>＋</span></div>
    <div class="img-name">新建图片</div>
  </div>`;
  grid.innerHTML = html;

  grid.querySelectorAll('.image-cell[data-index]').forEach(cell => {
    const index = +cell.dataset.index;
    let timer = null, fired = false;
    cell.addEventListener('pointerdown', () => {
      fired = false;
      timer = setTimeout(() => { fired = true; showImageMenu(index); }, 500);
    });
    cell.addEventListener('pointerup', () => {
      clearTimeout(timer);
      if (!fired) openImage(p.images[index].id);
    });
    cell.addEventListener('pointermove', () => clearTimeout(timer));
    cell.addEventListener('pointercancel', () => clearTimeout(timer));
    cell.addEventListener('pointerleave', () => clearTimeout(timer));
  });
  const addCell = $('#project-add-image-cell');
  if (addCell) addCell.onclick = () => addImagesToCurrentProject();
}

$('#project-title').addEventListener('click', () => {
  if (!state.current) return;
  const p = state.current;
  openPrompt('重命名房间', p.name, async val => {
    const t = val.trim();
    if (!t || t === p.name) return;
    p.name = t; p.updatedAt = Date.now();
    await DB.put(p);
    const pi = state.projects.findIndex(x => x.id === p.id);
    if (pi >= 0) state.projects[pi] = p;
    $('#project-title').textContent = t;
    toast('已重命名');
  });
});

function showImageMenu(index) {
  const p = state.current;
  if (!p) return;
  const im = p.images[index];
  showMenu(im.name || `图${index + 1}`, [
    { label: '🖼 打开编辑', action: () => openImage(im.id) },
    { label: '✏️ 重命名', action: () => renameImage(index) },
    { label: '📄 导出此图 PNG', action: () => exportSingleImage(index) },
    { label: '🗑 删除此图', action: () => deleteImage(index), danger: true },
  ]);
}

function renameImage(index) {
  const p = state.current;
  if (!p) return;
  const im = p.images[index];
  openPrompt('重命名图片', im.name || '', async val => {
    const t = val.trim();
    if (!t) return;
    im.name = t; p.updatedAt = Date.now();
    await DB.put(p);
    const pi = state.projects.findIndex(x => x.id === p.id);
    if (pi >= 0) state.projects[pi] = p;
    renderProjectPage();
    toast('已重命名');
  });
}
async function deleteImage(index) {
  const p = state.current;
  if (!p) return;
  if (!confirm(`删除「${p.images[index].name || '图' + (index + 1)}」？`)) return;
  p.images.splice(index, 1);
  p.updatedAt = Date.now();
  await DB.put(p);
  const pi = state.projects.findIndex(x => x.id === p.id);
  if (pi >= 0) state.projects[pi] = p;
  renderProjectPage();
  toast('已删除');
}
async function exportSingleImage(index) {
  const p = state.current;
  if (!p) return;
  busy(true, '导出中…');
  try {
    const blob = await renderImageToBlob(p.images[index]);
    await download(blob, `${sanitizeName(p.images[index].name || `图${index + 1}`)}.png`);
    toast('已导出');
  } finally { busy(false); }
}

function addImagesToCurrentProject() {
  pickFiles(async files => {
    if (!files.length || !state.current) return;
    busy(true, '导入中…');
    try {
      const errors = [];
      let okCount = 0;
      for (const file of files) {
        try {
          const img = await loadImageFromBlob(file);
          let thumbUrl = '';
          try { thumbUrl = await makeThumb(file); } catch (e) { thumbUrl = ''; }
          state.current.images.push({
            id: uid(),
            name: defaultImageName(state.current.images),
            imageBlob: file,
            thumbUrl,
            width: img.naturalWidth,
            height: img.naturalHeight,
            annotations: [],
          });
          okCount++;
        } catch (e) {
          const fname = (file && file.name) || '(无名字)';
          const fsize = (file && file.size);
          const ftype = (file && file.type);
          errors.push(`• ${fname}  [size=${fsize} type=${ftype || '空'}]\n  ${(e && e.message) || e}`);
        }
      }
      if (!okCount) {
        const detail = errors.length
          ? '全部导入失败（共 ' + errors.length + ' 张）\n\n' + errors.slice(0, 3).join('\n\n')
          : '没有成功导入的图片';
        alert(detail);
        return;
      }
      state.current.updatedAt = Date.now();
      await DB.put(state.current);
      const pi = state.projects.findIndex(x => x.id === state.current.id);
      if (pi >= 0) state.projects[pi] = state.current;
      renderProjectPage();
      toast(`已添加 ${okCount} 张${errors.length ? `，失败 ${errors.length} 张` : ''}`);
    } finally { busy(false); }
  });
}

$('#project-back').onclick = () => {
  const folderCtx = state.currentFolder;
  state.current = null;
  if (folderCtx !== undefined) showFolder(); else showHome();
};
$('#project-settings').onclick = () => openGeneralSettings('room');
$('#project-more').onclick = () => {
  if (!state.current) return;
  const p = state.current;
  showMenu('房间操作', [
    { label: '➕ 添加图片', action: () => addImagesToCurrentProject() },
    { label: '✏️ 重命名房间', action: () => {
      openPrompt('重命名房间', p.name, async val => {
        const t = val.trim();
        if (!t) return;
        p.name = t; p.updatedAt = Date.now();
        await DB.put(p);
        const pi = state.projects.findIndex(x => x.id === p.id);
        if (pi >= 0) state.projects[pi] = p;
        $('#project-title').textContent = t;
        toast('已重命名');
      });
    }},
    { label: '📁 移动到项目', action: () => showMovePicker(p) },
    { label: '📦 导出房间 ZIP', action: () => {
      if (!p.images.length) { toast('没有图片'); return; }
      exportProjectsAsZip([p], p.name);
    }},
    { label: '🖼 逐张导出 PNG', action: () => {
      if (!p.images.length) { toast('没有图片'); return; }
      exportProjectPNGs(p);
    }},
    { label: '🗑 删除房间', action: async () => {
      if (!confirm(`删除「${p.name}」及其所有图片？`)) return;
      await DB.del(p.id);
      state.projects = state.projects.filter(x => x.id !== p.id);
      state.current = null;
      if (state.currentFolder !== undefined) showFolder(); else showHome();
      toast('已删除');
    }, danger: true },
  ]);
};

function showMovePicker(p) {
  const folders = getAllFolders();
  const items = [{ label: '未分类', action: async () => {
    p.folderName = ''; p.updatedAt = Date.now(); await DB.put(p);
    const pi = state.projects.findIndex(x => x.id === p.id);
    if (pi >= 0) state.projects[pi] = p;
    toast('已移动到未分类');
  }}];
  for (const f of folders) {
    items.push({ label: `📁 ${f}`, action: async () => {
      p.folderName = f; p.updatedAt = Date.now(); await DB.put(p);
      const pi = state.projects.findIndex(x => x.id === p.id);
      if (pi >= 0) state.projects[pi] = p;
      toast(`已移动到「${f}」`);
    }});
  }
  items.push({ label: '➕ 新建项目…', action: () => {
    openPrompt('新建项目', '', async val => {
      const t = val.trim();
      if (!t) return;
      addExtraFolder(t);
      p.folderName = t; p.updatedAt = Date.now(); await DB.put(p);
      const pi = state.projects.findIndex(x => x.id === p.id);
      if (pi >= 0) state.projects[pi] = p;
      toast(`已移动到「${t}」`);
    });
  }});
  showMenu('移动到', items);
}

function updateWatermarkLayer() {
  $('#watermark-layer').hidden = !editorPrefs.watermark;
}

$('#watermark-close').onclick = (e) => {
  e.stopPropagation();
  editorPrefs.watermark = false;
  saveEditorPrefs();
  updateWatermarkLayer();
  renderCanvas();
  toast('已移除水印（可在设置中重新开启）');
};

function drawWatermarkOnScreen(ctx2, W, H) {
  if (!editorPrefs.watermark) return;
  const fs = 14;
  ctx2.save();
  ctx2.font = `600 ${fs}px -apple-system, sans-serif`;
  ctx2.fillStyle = 'rgba(255,255,255,0.55)';
  ctx2.shadowColor = 'rgba(0,0,0,0.7)';
  ctx2.shadowBlur = 4; ctx2.shadowOffsetY = 1;
  ctx2.textBaseline = 'top'; ctx2.textAlign = 'left';
  ctx2.fillText('PicDim', 44, 18);
  ctx2.restore();
}
function drawWatermarkForExport(ctx2, W, H) {
  if (!editorPrefs.watermark) return;
  const fs = Math.max(16, W * 0.032);
  ctx2.save();
  ctx2.font = `600 ${fs}px -apple-system, sans-serif`;
  ctx2.fillStyle = 'rgba(255,255,255,0.55)';
  ctx2.shadowColor = 'rgba(0,0,0,0.7)';
  ctx2.shadowBlur = fs * 0.5; ctx2.shadowOffsetY = fs * 0.08;
  ctx2.textBaseline = 'top'; ctx2.textAlign = 'left';
  ctx2.fillText('PicDim', fs * 0.8, fs * 0.8);
  ctx2.restore();
}

const canvas = $('#editor-canvas');
const ctx = canvas.getContext('2d');
const magEl = $('#magnifier');

function computeImageRect() {
  const wrap = $('#canvas-wrap');
  const W = wrap.clientWidth, H = wrap.clientHeight;
  const iw = (state.image && state.image.naturalWidth) || 1;
  const ih = (state.image && state.image.naturalHeight) || 1;
  const fit = Math.min(W / iw, H / ih) * state.zoom;
  const w = iw * fit;
  const h = ih * fit;
  const x = (W - w) / 2 + state.panX;
  const y = (H - h) / 2 + state.panY;
  return { x, y, w, h };
}

function screenToNorm(clientX, clientY) {
  const wrap = $('#canvas-wrap');
  const r = wrap.getBoundingClientRect();
  const rect = computeImageRect();
  return {
    x: (clientX - r.left - rect.x) / rect.w,
    y: (clientY - r.top - rect.y) / rect.h,
  };
}

function resizeCanvas() {
  const wrap = $('#canvas-wrap');
  const dpr = window.devicePixelRatio || 1;
  const W = wrap.clientWidth, H = wrap.clientHeight;
  canvas.style.width = W + 'px';
  canvas.style.height = H + 'px';
  canvas.width = Math.round(W * dpr);
  canvas.height = Math.round(H * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  renderCanvas();
}

window.addEventListener('resize', () => {
  if (!$('#view-editor').hidden) resizeCanvas();
});

async function openImage(imageId) {
  if (!state.current) return;
  const im = state.current.images.find(x => x.id === imageId);
  if (!im) return;
  state.currentImage = im;
  state.annotations = (im.annotations || []).map(a => Object.assign({}, a, { type: a.type || 'line' }));
  state.history = [];
  state.pendingStart = null; state.dragCurrent = null;
  state.snapLines = { x: null, y: null };
  state.selectedAnnotationId = null;
  state.zoom = 1.0; state.panX = 0; state.panY = 0;
  state.editMode = 'pan';

  let img;
  try { img = await loadImageFromBlob(im.imageBlob); }
  catch (e) {
    alert('图片打开失败：' + ((e && e.message) || e));
    return;
  }
  state.image = img;

  const idx = state.current.images.findIndex(x => x.id === imageId);
  $('#editor-title').textContent = state.currentImage.name || `图${idx + 1}`;

  showEditor();
  updateWatermarkLayer();
  updateModeButton();
  requestAnimationFrame(() => {
    resizeCanvas();
    updateZoomLabel();
    updateEditorFooter();
  });
}

function updateZoomLabel() { $('#zoom-label').textContent = state.zoom.toFixed(1) + 'x'; }
function updateModeButton() {
  const btn = $('#btn-mode-toggle');
  if (state.editMode === 'draw') {
    btn.classList.add('active');
    btn.textContent = '✏️';
    btn.title = '点画标尺（开启）';
  } else {
    btn.classList.remove('active');
    btn.textContent = '🤚';
    btn.title = '平移图片（点击开启点画）';
  }
}
function resetView() {
  state.zoom = 1.0; state.panX = 0; state.panY = 0;
  updateZoomLabel(); renderCanvas();
}

$('#btn-mode-toggle').onclick = () => {
  state.editMode = state.editMode === 'draw' ? 'pan' : 'draw';
  updateModeButton();
  toast(state.editMode === 'draw' ? '点画模式：可画标尺' : '平移模式：拖动图片');
};
$('#btn-layer-up').onclick = () => {
  if (!state.selectedAnnotationId) { toast('请先选中一条标线或文字'); return; }
  moveLayer(state.selectedAnnotationId, 'up');
};
$('#btn-layer-down').onclick = () => {
  if (!state.selectedAnnotationId) { toast('请先选中一条标线或文字'); return; }
  moveLayer(state.selectedAnnotationId, 'down');
};

$('#btn-add-ruler').onclick = () => {
  if (!state.image) return;
  const wrap = $('#canvas-wrap');
  const W = wrap.clientWidth, H = wrap.clientHeight;
  const rect = computeImageRect();
  const centerNX = (W / 2 - rect.x) / rect.w;
  const centerNY = (H / 2 - rect.y) / rect.h;
  const visibleLeftNX = (0 - rect.x) / rect.w;
  const visibleRightNX = (W - rect.x) / rect.w;
  const visibleTopNY = (0 - rect.y) / rect.h;
  const visibleBottomNY = (H - rect.y) / rect.h;
  const visibleWidthNX = Math.min(1, visibleRightNX) - Math.max(0, visibleLeftNX);
  const visibleHeightNY = Math.min(1, visibleBottomNY) - Math.max(0, visibleTopNY);
  let lineLen = Math.max(0.1, Math.min(0.9, visibleWidthNX * 0.6));
  let x1 = centerNX - lineLen / 2;
  let x2 = centerNX + lineLen / 2;
  if (x1 < 0) { x2 -= x1; x1 = 0; }
  if (x2 > 1) { x1 -= (x2 - 1); x2 = 1; }
  if (x1 < 0) { x1 = 0; x2 = 1; }
  let y = clamp(centerNY, Math.max(0.1, visibleTopNY), Math.min(0.9, visibleBottomNY));
  if (visibleHeightNY <= 0) y = 0.5;
  y = clamp(y, 0.05, 0.95);

  const a = {
    id: uid(), type: 'line',
    x1: x1, y1: y, x2: x2, y2: y,
    text: '',
    color: styleDefault.color,
    weight: styleDefault.weight,
    showValue: styleDefault.showValue !== false,
    endpointStyle: styleDefault.endpoint,
    fontSize: styleDefault.fontSize,
    textColorSame: styleDefault.textColorSame,
    textColor: styleDefault.textColor,
    labelPos: styleDefault.labelPos,
  };
  pushHistory();
  state.annotations.push(a);
  state.selectedAnnotationId = a.id;
  persistCurrent(); renderCanvas(); updateEditorFooter();
  editValueOf(a.id);
};

$('#btn-add-text').onclick = () => {
  if (!state.image) return;
  const wrap = $('#canvas-wrap');
  const W = wrap.clientWidth, H = wrap.clientHeight;
  const rect = computeImageRect();
  const cx = clamp((W / 2 - rect.x) / rect.w, 0.02, 0.98);
  const cy = clamp((H / 2 - rect.y) / rect.h, 0.02, 0.98);

  const a = {
    id: uid(), type: 'text',
    x1: cx, y1: cy, x2: cx, y2: cy,
    text: '',
    color: styleDefault.color,
    weight: styleDefault.weight,
    showValue: true,
    endpointStyle: 'none',
    fontSize: styleDefault.fontSize,
    textColorSame: styleDefault.textColorSame,
    textColor: styleDefault.textColor,
    labelPos: 'middle',
  };
  pushHistory();
  state.annotations.push(a);
  state.selectedAnnotationId = a.id;
  persistCurrent(); renderCanvas(); updateEditorFooter();
  editValueOf(a.id);
};

function renderCanvas() {
  if (!state.image) return;
  const wrap = $('#canvas-wrap');
  const W = wrap.clientWidth, H = wrap.clientHeight;
  ctx.clearRect(0, 0, W, H);
  const rect = computeImageRect();
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.4)';
  ctx.shadowBlur = 20;
  ctx.drawImage(state.image, rect.x, rect.y, rect.w, rect.h);
  ctx.restore();
  if (editorPrefs.showBorder) {
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.setLineDash([4, 4]); ctx.lineWidth = 1;
    ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
    ctx.restore();
  }
  for (const a of state.annotations) drawAnnotationOn(ctx, a, rect);
  if (state.pendingStart && state.dragCurrent) {
    const p1x = rect.x + state.pendingStart.x * rect.w;
    const p1y = rect.y + state.pendingStart.y * rect.h;
    const p2x = rect.x + state.dragCurrent.x * rect.w;
    const p2y = rect.y + state.dragCurrent.y * rect.h;
    ctx.save();
    ctx.strokeStyle = 'rgba(255,59,48,0.85)';
    ctx.setLineDash([8, 6]); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(p1x, p1y); ctx.lineTo(p2x, p2y); ctx.stroke();
    ctx.restore();
    ctx.fillStyle = '#ff3b30';
    ctx.beginPath(); ctx.arc(p1x, p1y, 6, 0, Math.PI * 2); ctx.fill();
  }
  if (state.snapLines.x !== null) {
    const px = rect.x + state.snapLines.x * rect.w;
    ctx.save();
    ctx.strokeStyle = 'rgba(52,199,89,0.9)';
    ctx.setLineDash([6, 4]); ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, H); ctx.stroke();
    ctx.restore();
  }
  if (state.snapLines.y !== null) {
    const py = rect.y + state.snapLines.y * rect.h;
    ctx.save();
    ctx.strokeStyle = 'rgba(52,199,89,0.9)';
    ctx.setLineDash([6, 4]); ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(W, py); ctx.stroke();
    ctx.restore();
  }
  drawWatermarkOnScreen(ctx, W, H);
}

function drawEndpoint(c, x, y, dir, style, color, r) {
  if (style === 'none' || !style) return;
  c.save();
  c.translate(x, y);
  c.rotate(dir);
  c.fillStyle = color; c.strokeStyle = color;
  switch (style) {
    case 'dot':
      c.beginPath(); c.arc(0, 0, r * 0.75, 0, Math.PI * 2); c.fill(); break;
    case 'circle':
      c.fillStyle = '#fff';
      c.beginPath(); c.arc(0, 0, r, 0, Math.PI * 2); c.fill();
      c.fillStyle = color;
      c.beginPath(); c.arc(0, 0, r * 0.6, 0, Math.PI * 2); c.fill(); break;
    case 'square':
      c.fillStyle = '#fff';
      c.fillRect(-r * 0.9, -r * 0.9, r * 1.8, r * 1.8);
      c.fillStyle = color;
      c.fillRect(-r * 0.5, -r * 0.5, r, r); break;
    case 'arrow':
      c.beginPath();
      c.moveTo(0, 0); c.lineTo(-r * 1.8, -r * 1.2); c.lineTo(-r * 1.8, r * 1.2);
      c.closePath(); c.fill(); break;
    case 'tick':
      c.lineWidth = Math.max(1, r * 0.6); c.lineCap = 'round';
      c.beginPath(); c.moveTo(0, -r * 1.5); c.lineTo(0, r * 1.5); c.stroke(); break;
  }
  c.restore();
}

function computeCrosshairScreenPos(a, rect) {
  const x1 = rect.x + a.x1 * rect.w;
  const y1 = rect.y + a.y1 * rect.h;
  const x2 = rect.x + a.x2 * rect.w;
  const y2 = rect.y + a.y2 * rect.h;
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const fs = Math.max(14, rect.w * 0.028) * (a.fontSize || 1);
  const bh = fs * 1.44;
  const labelPos = a.labelPos || 'above';
  const showVal = a.showValue !== false;
  let labelCenterY = 0;
  if (showVal) {
    if (labelPos === 'above') labelCenterY = -(bh / 2 + fs * 0.35);
    else if (labelPos === 'below') labelCenterY = bh / 2 + fs * 0.35;
  }
  const r = Math.max(12, fs * 0.85);
  const gap = fs * 0.55;
  const labelBottomLocal = showVal ? (labelCenterY + bh / 2) : 0;
  const labelTopLocal = showVal ? (labelCenterY - bh / 2) : 0;
  const belowLocalY = Math.max(labelBottomLocal, 0) + gap + r;
  const aboveLocalY = Math.min(labelTopLocal, 0) - gap - r;
  const cos = Math.cos(angle), sin = Math.sin(angle);
  const wrap = $('#canvas-wrap');
  const W = wrap.clientWidth, H = wrap.clientHeight;
  const pad = r + 6;
  function toScreen(localY) {
    return { x: mx - localY * sin, y: my + localY * cos };
  }
  function inBounds(p) {
    return p.x - pad >= 0 && p.x + pad <= W && p.y - pad >= 0 && p.y + pad <= H;
  }
  let pos = toScreen(belowLocalY);
  if (!inBounds(pos)) {
    const alt = toScreen(aboveLocalY);
    if (inBounds(alt)) pos = alt;
    else {
      const belowScore = Math.min(pos.y, H - pos.y, pos.x, W - pos.x);
      const aboveScore = Math.min(alt.y, H - alt.y, alt.x, W - alt.x);
      pos = aboveScore > belowScore ? alt : pos;
    }
  }
  pos.x = clamp(pos.x, pad, Math.max(pad, W - pad));
  pos.y = clamp(pos.y, pad, Math.max(pad, H - pad));
  return { x: pos.x, y: pos.y, r: r };
}

function drawCrosshair(c, x, y, r, color) {
  c.save();
  c.lineCap = 'round';
  c.strokeStyle = 'rgba(255,255,255,0.95)';
  c.lineWidth = Math.max(4, r * 0.45);
  c.beginPath();
  c.moveTo(x - r, y); c.lineTo(x + r, y);
  c.moveTo(x, y - r); c.lineTo(x, y + r);
  c.stroke();
  c.strokeStyle = color;
  c.lineWidth = Math.max(2, r * 0.22);
  c.beginPath();
  c.moveTo(x - r, y); c.lineTo(x + r, y);
  c.moveTo(x, y - r); c.lineTo(x, y + r);
  c.stroke();
  c.fillStyle = 'rgba(255,255,255,0.95)';
  c.beginPath(); c.arc(x, y, r * 0.3, 0, Math.PI * 2); c.fill();
  c.fillStyle = color;
  c.beginPath(); c.arc(x, y, r * 0.16, 0, Math.PI * 2); c.fill();
  c.restore();
}

function drawTextOn(c, a, rect) {
  const cx = rect.x + a.x1 * rect.w;
  const cy = rect.y + a.y1 * rect.h;
  const fs = Math.max(14, rect.w * 0.028) * (a.fontSize || 1);
  const displayText = a.text || '？';
  const isSelected = state.selectedAnnotationId === a.id;
  const lineColor = colorById(a.color).css;
  const textSameAsLine = a.textColorSame !== false;
  const textColor = textSameAsLine ? lineColor : colorById(a.textColor || a.color).css;

  c.save();
  c.font = `600 ${fs}px -apple-system, sans-serif`;
  const tw = c.measureText(displayText).width;
  const padX = fs * 0.5, padY = fs * 0.3;
  const bw = tw + padX * 2, bh = fs + padY * 2;
  c.translate(cx, cy);
  c.fillStyle = 'rgba(255,255,255,0.92)';
  roundRect(c, -bw / 2, -bh / 2, bw, bh, bh * 0.3);
  c.fill();
  if (isSelected) {
    c.save();
    c.strokeStyle = lineColor;
    c.lineWidth = Math.max(1.6, fs * 0.09);
    c.setLineDash([6, 4]);
    c.lineDashOffset = -dashAnimOffset * 0.35;
    roundRect(c, -bw / 2, -bh / 2, bw, bh, bh * 0.3);
    c.stroke();
    c.restore();
  }
  c.fillStyle = textColor;
  c.textAlign = 'center'; c.textBaseline = 'middle';
  c.fillText(displayText, 0, 0);
  c.restore();
}

function drawAnnotationOn(c, a, rect) {
  if (a.type === 'text') { drawTextOn(c, a, rect); return; }
  const x1 = rect.x + a.x1 * rect.w;
  const y1 = rect.y + a.y1 * rect.h;
  const x2 = rect.x + a.x2 * rect.w;
  const y2 = rect.y + a.y2 * rect.h;
  const weight = a.weight || 1;
  const lineColor = colorById(a.color).css;
  const endpoint = a.endpointStyle || 'circle';
  const fontSizeMul = a.fontSize || 1;
  const textSameAsLine = a.textColorSame !== false;
  const textColor = textSameAsLine ? lineColor : colorById(a.textColor || a.color).css;
  const labelPos = a.labelPos || 'above';
  const isSelected = state.selectedAnnotationId === a.id;
  const lw = Math.max(2, rect.w * 0.003) * weight;
  const dr = Math.max(4, rect.w * 0.006) * weight;

  c.save();
  c.lineCap = 'round';
  c.strokeStyle = lineColor; c.lineWidth = lw;
  c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke();
  c.restore();
  const angle = Math.atan2(y2 - y1, x2 - x1);
  drawEndpoint(c, x1, y1, angle + Math.PI, endpoint, lineColor, dr);
  drawEndpoint(c, x2, y2, angle, endpoint, lineColor, dr);

  if (a.showValue !== false) {
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    const fs = Math.max(14, rect.w * 0.028) * fontSizeMul;
    let labelAngle = Math.atan2(y2 - y1, x2 - x1);
    if (labelAngle > Math.PI / 2 || labelAngle < -Math.PI / 2) labelAngle += Math.PI;
    c.font = `600 ${fs}px -apple-system, sans-serif`;
    const displayText = a.text || '？';
    const tw = c.measureText(displayText).width;
    const padX = fs * 0.4, padY = fs * 0.22;
    const bw = tw + padX * 2, bh = fs + padY * 2;
    let centerY;
    if (labelPos === 'above') centerY = -(bh / 2 + fs * 0.35);
    else if (labelPos === 'below') centerY = bh / 2 + fs * 0.35;
    else centerY = 0;
    const boxX = -bw / 2;
    const boxY = centerY - bh / 2;
    const cornerR = bh * 0.3;
    c.save();
    c.translate(mx, my);
    c.rotate(labelAngle);
    c.fillStyle = 'rgba(255,255,255,0.92)';
    roundRect(c, boxX, boxY, bw, bh, cornerR);
    c.fill();
    if (isSelected) {
      c.save();
      c.strokeStyle = lineColor;
      c.lineWidth = Math.max(1.6, fs * 0.09);
      c.setLineDash([6, 4]);
      c.lineDashOffset = -dashAnimOffset * 0.35;
      roundRect(c, boxX, boxY, bw, bh, cornerR);
      c.stroke();
      c.restore();
    }
    c.fillStyle = textColor;
    c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText(displayText, 0, centerY);
    c.restore();
  }

  if (isSelected) {
    const ch = computeCrosshairScreenPos(a, rect);
    if (ch) drawCrosshair(c, ch.x, ch.y, ch.r, lineColor);
  }
}

const activePointers = new Map();
let pinchState = null;
const touch = {
  id: null, startSX: 0, startSY: 0, startNorm: { x: 0, y: 0 },
  longPressTimer: null, longPressFired: false,
  moved: false, mode: null, target: null, part: null, originalCopy: null,
  lastTapTime: 0, lastTapX: 0, lastTapY: 0,
  startPanX: 0, startPanY: 0,
};

function distToSeg(px, py, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay;
  const l2 = dx * dx + dy * dy;
  if (l2 === 0) return Math.hypot(px - ax, py - ay);
  let t = ((px - ax) * dx + (py - ay) * dy) / l2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

function hitTest(p) {
  const rect = computeImageRect();
  const wrap = $('#canvas-wrap');
  const W = wrap.clientWidth, H = wrap.clientHeight;
  const th = Math.max(20, Math.min(W, H) * 0.06);
  const px = rect.x + p.x * rect.w;
  const py = rect.y + p.y * rect.h;

  if (state.selectedAnnotationId) {
    const selA = state.annotations.find(x => x.id === state.selectedAnnotationId);
    if (selA && selA.type !== 'text') {
      const ch = computeCrosshairScreenPos(selA, rect);
      if (ch) {
        const d = Math.hypot(px - ch.x, py - ch.y);
        if (d < ch.r + 16) return { id: selA.id, part: 'crosshair' };
      }
    }
  }

  for (let i = state.annotations.length - 1; i >= 0; i--) {
    const a = state.annotations[i];
    if (a.type === 'text') {
      const cx = rect.x + a.x1 * rect.w;
      const cy = rect.y + a.y1 * rect.h;
      const fs = Math.max(14, rect.w * 0.028) * (a.fontSize || 1);
      ctx.save();
      ctx.font = `600 ${fs}px -apple-system, sans-serif`;
      const tw = ctx.measureText(a.text || '？').width;
      ctx.restore();
      const padX = fs * 0.5, padY = fs * 0.3;
      const halfW = (tw + padX * 2) / 2 + 6;
      const halfH = (fs + padY * 2) / 2 + 6;
      if (px >= cx - halfW && px <= cx + halfW && py >= cy - halfH && py <= cy + halfH) {
        return { id: a.id, part: 'whole' };
      }
      continue;
    }
    const x1 = rect.x + a.x1 * rect.w;
    const y1 = rect.y + a.y1 * rect.h;
    const x2 = rect.x + a.x2 * rect.w;
    const y2 = rect.y + a.y2 * rect.h;
    if (Math.hypot(px - x1, py - y1) < th) return { id: a.id, part: 'start' };
    if (Math.hypot(px - x2, py - y2) < th) return { id: a.id, part: 'end' };
    if (distToSeg(px, py, x1, y1, x2, y2) < th * 0.8) return { id: a.id, part: 'whole' };
  }
  return null;
}

canvas.addEventListener('pointerdown', onPointerDown);
canvas.addEventListener('pointermove', onPointerMove);
canvas.addEventListener('pointerup', onPointerUp);
canvas.addEventListener('pointercancel', onPointerUp);

function cancelActiveSingleTouch() {
  clearTimeout(touch.longPressTimer);
  if (touch.originalCopy && touch.target) {
    const idx = state.annotations.findIndex(a => a.id === touch.target);
    if (idx >= 0) {
      state.annotations[idx] = Object.assign({}, touch.originalCopy);
      if (state.history.length) state.history.pop();
    }
  }
  touch.id = null; touch.mode = null; touch.target = null; touch.part = null;
  touch.originalCopy = null; touch.longPressFired = false; touch.moved = false;
  state.pendingStart = null; state.dragCurrent = null;
  state.snapLines = { x: null, y: null };
  hideMagnifier(); updateEditorFooter(); renderCanvas();
}

function startPinch() {
  const pts = [...activePointers.values()];
  if (pts.length < 2) return;
  const [p1, p2] = pts;
  const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
  const midClient = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
  const wrap = $('#canvas-wrap');
  const wr = wrap.getBoundingClientRect();
  const localMid = { x: midClient.x - wr.left, y: midClient.y - wr.top };
  const rect = computeImageRect();
  const normMid = {
    x: (localMid.x - rect.x) / rect.w,
    y: (localMid.y - rect.y) / rect.h,
  };
  pinchState = {
    startDist: dist, startZoom: state.zoom,
    startMid: localMid, normMid,
  };
}

function onPointerDown(e) {
  if (e.pointerType === 'mouse' && e.button !== 0) return;
  e.preventDefault();
  canvas.setPointerCapture(e.pointerId);
  activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (activePointers.size === 2) { cancelActiveSingleTouch(); startPinch(); return; }
  if (activePointers.size > 2) return;

  const sx = e.clientX, sy = e.clientY;
  const p = screenToNorm(sx, sy);
  touch.id = e.pointerId;
  touch.startSX = sx; touch.startSY = sy; touch.startNorm = p;
  touch.longPressFired = false; touch.moved = false;
  const hit = hitTest(p);
  if (hit) {
    const changed = state.selectedAnnotationId !== hit.id;
    state.selectedAnnotationId = hit.id;
    if (changed) renderCanvas();
    if (hit.part === 'crosshair' || hit.part === 'whole') touch.mode = 'whole';
    else touch.mode = 'endpoint';
    touch.target = hit.id; touch.part = hit.part;
    const orig = state.annotations.find(a => a.id === hit.id);
    touch.originalCopy = JSON.parse(JSON.stringify(orig));
    pushHistory();
    clearTimeout(touch.longPressTimer);
    touch.longPressTimer = setTimeout(() => {
      if (touch.moved) return;
      touch.longPressFired = true;
      if (touch.originalCopy) {
        const idx = state.annotations.findIndex(a => a.id === touch.target);
        if (idx >= 0) state.annotations[idx] = Object.assign({}, touch.originalCopy);
        state.history.pop(); renderCanvas();
      }
      showAnnotationMenu(touch.target);
    }, 450);
    return;
  }
  if (state.selectedAnnotationId) {
    state.selectedAnnotationId = null; renderCanvas();
  }
  if (state.editMode === 'pan') {
    touch.mode = 'pan';
    touch.startPanX = state.panX;
    touch.startPanY = state.panY;
    return;
  }
  touch.mode = 'new';
}

function onPointerMove(e) {
  if (!activePointers.has(e.pointerId)) return;
  e.preventDefault();
  activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (activePointers.size === 2 && pinchState) {
    const pts = [...activePointers.values()];
    const [p1, p2] = pts;
    const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
    const midClient = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
    const wrap = $('#canvas-wrap');
    const wr = wrap.getBoundingClientRect();
    const localMid = { x: midClient.x - wr.left, y: midClient.y - wr.top };
    const factor = pinchState.startDist > 0 ? dist / pinchState.startDist : 1;
    const newZoom = clamp(pinchState.startZoom * factor, 0.25, 5);
    const iw = (state.image && state.image.naturalWidth) || 1;
    const ih = (state.image && state.image.naturalHeight) || 1;
    const W = wrap.clientWidth, H = wrap.clientHeight;
    const fit = Math.min(W / iw, H / ih) * newZoom;
    const newW = iw * fit, newH = ih * fit;
    const targetX = localMid.x - pinchState.normMid.x * newW;
    const targetY = localMid.y - pinchState.normMid.y * newH;
    state.zoom = newZoom;
    state.panX = targetX - (W - newW) / 2;
    state.panY = targetY - (H - newH) / 2;
    updateZoomLabel(); renderCanvas(); return;
  }
  if (activePointers.size > 1) return;
  if (e.pointerId !== touch.id) return;
  const sx = e.clientX, sy = e.clientY;

  if (touch.mode === 'pan') {
    const dx = sx - touch.startSX;
    const dy = sy - touch.startSY;
    state.panX = touch.startPanX + dx;
    state.panY = touch.startPanY + dy;
    renderCanvas(); return;
  }
  const dx = sx - touch.startSX, dy = sy - touch.startSY;
  if (!touch.moved && Math.hypot(dx, dy) > 12) {
    touch.moved = true; clearTimeout(touch.longPressTimer);
  }
  if (touch.longPressFired) return;
  const p = screenToNorm(sx, sy);
  if (touch.mode === 'endpoint' && touch.moved) {
    applyEndpointDrag(touch.originalCopy, touch.part, p);
    showMagnifier(sx, sy); renderCanvas();
  } else if (touch.mode === 'whole' && touch.moved) {
    applyWholeDrag(touch.originalCopy, p);
    hideMagnifier(); renderCanvas();
  } else if (touch.mode === 'new' && touch.moved) {
    state.pendingStart = screenToNorm(touch.startSX, touch.startSY);
    state.dragCurrent = p;
    showMagnifier(sx, sy); renderCanvas();
  }
}

function onPointerUp(e) {
  if (!activePointers.has(e.pointerId)) return;
  e.preventDefault();
  activePointers.delete(e.pointerId);
  if (activePointers.size < 2) pinchState = null;
  if (activePointers.size > 0) return;
  if (e.pointerId !== touch.id) return;
  clearTimeout(touch.longPressTimer);
  hideMagnifier();
  const fireLong = touch.longPressFired;
  const mode = touch.mode;
  const startSX = touch.startSX, startSY = touch.startSY;
  const moved = touch.moved;
  const targetId = touch.target;
  const lastTap = { time: touch.lastTapTime, x: touch.lastTapX, y: touch.lastTapY };
  const sx = e.clientX, sy = e.clientY;
  const p = screenToNorm(sx, sy);
  const dist = Math.hypot(sx - startSX, sy - startSY);
  const now = Date.now();
  Object.assign(touch, {
    id: null, startSX: 0, startSY: 0,
    longPressTimer: null, longPressFired: false, moved: false,
    mode: null, target: null, part: null, originalCopy: null,
  });
  if (mode === 'pan') return;
  if (fireLong) return;

  if (mode === 'endpoint' || mode === 'whole') {
    state.snapLines = { x: null, y: null };
    persistCurrent(); renderCanvas();
    if (!moved && targetId) {
      const a = state.annotations.find(x => x.id === targetId);
      const isDouble = (now - lastTap.time < 320) &&
        Math.hypot(sx - lastTap.x, sy - lastTap.y) < 30;
      if (isDouble) { touch.lastTapTime = 0; editValueOf(targetId); }
      else if (a && !a.text) { editValueOf(targetId); }
      else {
        touch.lastTapTime = now;
        touch.lastTapX = sx; touch.lastTapY = sy;
      }
    }
    return;
  }
  if (moved || dist > 12) {
    const s = screenToNorm(startSX, startSY);
    state.pendingStart = null; state.dragCurrent = null;
    state.snapLines = { x: null, y: null };
    renderCanvas(); promptValueForNew(s, p); return;
  }
  const isDouble = (now - lastTap.time < 320) &&
    Math.hypot(sx - lastTap.x, sy - lastTap.y) < 30;
  if (isDouble) {
    const hit = hitTest(p);
    if (hit) { touch.lastTapTime = 0; editValueOf(hit.id); return; }
  }
  if (state.pendingStart) {
    const s = state.pendingStart;
    state.pendingStart = null;
    state.snapLines = { x: null, y: null };
    renderCanvas(); promptValueForNew(s, p);
  } else {
    state.pendingStart = p;
    touch.lastTapTime = now;
    touch.lastTapX = sx; touch.lastTapY = sy;
    renderCanvas();
  }
}

function applyEndpointDrag(orig, part, p) {
  const idx = state.annotations.findIndex(a => a.id === orig.id);
  if (idx < 0) return;
  const a = Object.assign({}, state.annotations[idx]);
  const np = Object.assign({}, p);
  const snap = { x: null, y: null };
  if (editorPrefs.snap) {
    const TH = 0.015;
    const other = part === 'start'
      ? { x: a.x2, y: a.y2 } : { x: a.x1, y: a.y1 };
    if (Math.abs(np.x - other.x) < TH) { np.x = other.x; snap.x = other.x; }
    if (Math.abs(np.y - other.y) < TH) { np.y = other.y; snap.y = other.y; }
    const targets = [];
    for (const o of state.annotations) {
      if (o.id === orig.id) continue;
      if (o.type === 'text') continue;
      targets.push({ x: o.x1, y: o.y1 }, { x: o.x2, y: o.y2 });
    }
    let best = null;
    for (const t of targets) {
      const d = Math.hypot(t.x - np.x, t.y - np.y);
      if (d < TH && (!best || d < best.d)) best = { d, t };
    }
    if (best) {
      np.x = best.t.x; np.y = best.t.y;
      snap.x = best.t.x; snap.y = best.t.y;
    } else {
      let bx = null, by = null;
      for (const t of targets) {
        const dx = Math.abs(t.x - np.x);
        if (dx < TH && (!bx || dx < bx.d)) bx = { d: dx, v: t.x };
        const dy = Math.abs(t.y - np.y);
        if (dy < TH && (!by || dy < by.d)) by = { d: dy, v: t.y };
      }
      if (bx) { np.x = bx.v; snap.x = bx.v; }
      if (by) { np.y = by.v; snap.y = by.v; }
    }
  }
  if (part === 'start') { a.x1 = np.x; a.y1 = np.y; }
  else { a.x2 = np.x; a.y2 = np.y; }
  state.annotations[idx] = a;
  state.snapLines = snap;
}

function applyWholeDrag(orig, p) {
  const idx = state.annotations.findIndex(a => a.id === orig.id);
  if (idx < 0) return;
  const dx = p.x - touch.startNorm.x;
  const dy = p.y - touch.startNorm.y;
  const a = state.annotations[idx];
  a.x1 = orig.x1 + dx; a.y1 = orig.y1 + dy;
  a.x2 = orig.x2 + dx; a.y2 = orig.y2 + dy;
}

function showMagnifier(clientX, clientY) {
  const wrap = $('#canvas-wrap');
  const wr = wrap.getBoundingClientRect();
  const S = 110, Z = 2.5;
  const dpr = window.devicePixelRatio || 1;
  magEl.width = S * dpr; magEl.height = S * dpr;
  magEl.style.width = S + 'px'; magEl.style.height = S + 'px';
  const mc = magEl.getContext('2d');
  mc.setTransform(dpr, 0, 0, dpr, 0, 0);
  mc.fillStyle = '#fff';
  mc.fillRect(0, 0, S, S);
  const cx = (clientX - wr.left) * (canvas.width / wr.width);
  const cy = (clientY - wr.top) * (canvas.height / wr.height);
  const sw = (S / Z) * (canvas.width / wr.width);
  const sh = (S / Z) * (canvas.height / wr.height);
  mc.drawImage(canvas, cx - sw / 2, cy - sh / 2, sw, sh, 0, 0, S, S);
  mc.strokeStyle = 'rgba(255,59,48,0.9)';
  mc.lineWidth = 1;
  mc.beginPath();
  mc.moveTo(S / 2, S / 2 - 8); mc.lineTo(S / 2, S / 2 + 8);
  mc.moveTo(S / 2 - 8, S / 2); mc.lineTo(S / 2 + 8, S / 2);
  mc.stroke();
  const relX = clientX - wr.left;
  const relY = clientY - wr.top;
  let left = relX - S / 2;
  let top = relY - S - 30;
  if (top < 4) top = relY + 30;
  if (top + S > wr.height - 4) top = wr.height - S - 4;
  if (left < 4) left = 4;
  if (left + S > wr.width - 4) left = wr.width - S - 4;
  magEl.style.left = left + 'px';
  magEl.style.top = top + 'px';
  magEl.hidden = false;
}
function hideMagnifier() { magEl.hidden = true; }

const UNITS = [
  { id: '',   label: '无' },
  { id: 'mm', label: 'mm' },
  { id: 'cm', label: 'cm' },
  { id: 'm',  label: 'm'  },
  { id: 'in', label: 'in' },
  { id: 'ft', label: 'ft' },
];
let vmState = null;

function makeStyleFromAnnotation(a) {
  return {
    color: a.color || 'red',
    weight: a.weight || 1,
    endpointStyle: a.endpointStyle || 'circle',
    fontSize: a.fontSize || 1,
    showValue: a.showValue !== false,
    textColorSame: a.textColorSame !== false,
    textColor: a.textColor || 'red',
    labelPos: a.labelPos || 'above',
  };
}
function makeStyleFromDefault() {
  return {
    color: styleDefault.color,
    weight: styleDefault.weight,
    endpointStyle: styleDefault.endpoint,
    fontSize: styleDefault.fontSize,
    showValue: styleDefault.showValue,
    textColorSame: styleDefault.textColorSame,
    textColor: styleDefault.textColor,
    labelPos: styleDefault.labelPos,
  };
}

function promptValueForNew(start, end) {
  vmState = {
    mode: 'new', type: 'line', unit: '',
    draft: { start, end }, annotationId: null,
    style: makeStyleFromDefault(), originalStyle: null,
  };
  renderValueModal('输入尺寸', '');
}

function editValueOf(id) {
  const a = state.annotations.find(x => x.id === id);
  if (!a) return;
  state.selectedAnnotationId = id;
  renderCanvas();
  const isText = a.type === 'text';
  let unit = '';
  let text = a.text || '';
  if (!isText) {
    for (const u of ['mm', 'cm', 'in', 'ft', 'm']) {
      if (text && text.endsWith(u)) { text = text.slice(0, -u.length); unit = u; break; }
    }
  }
  const originalStyle = makeStyleFromAnnotation(a);
  vmState = {
    mode: 'edit', type: a.type || 'line', unit,
    draft: null, annotationId: id,
    style: Object.assign({}, originalStyle), originalStyle,
  };
  renderValueModal(
    isText ? (a.text ? '修改文字' : '输入文字') : (a.text ? '修改尺寸' : '输入尺寸'),
    text
  );
}

function cancelValueModal() {
  const modal = $('#modal-value');
  modal.hidden = true;
  if (vmState && vmState.mode === 'edit' && vmState.annotationId && vmState.originalStyle) {
    const a = state.annotations.find(x => x.id === vmState.annotationId);
    if (a) {
      a.color = vmState.originalStyle.color;
      a.weight = vmState.originalStyle.weight;
      a.endpointStyle = vmState.originalStyle.endpointStyle;
      a.fontSize = vmState.originalStyle.fontSize;
      a.showValue = vmState.originalStyle.showValue;
      a.textColorSame = vmState.originalStyle.textColorSame;
      a.textColor = vmState.originalStyle.textColor;
      a.labelPos = vmState.originalStyle.labelPos;
      persistCurrent();
    }
  }
  state.pendingStart = null;
  vmState = null;
  renderCanvas();
}

function renderValueModal(title, initialText) {
  const modal = $('#modal-value');
  $('#value-title').textContent = title;
  const input = $('#value-input');
  input.value = initialText;
  const isText = vmState.type === 'text';

  const bar = $('#value-unit-bar');
  if (isText) { bar.hidden = true; bar.innerHTML = ''; }
  else {
    bar.hidden = false;
    bar.innerHTML = UNITS.map(u =>
      `<button class="unit-btn ${u.id === vmState.unit ? 'active' : ''}" data-u="${u.id}">${u.label}</button>`
    ).join('');
    bar.querySelectorAll('.unit-btn').forEach(b => {
      b.onclick = () => {
        vmState.unit = b.dataset.u;
        bar.querySelectorAll('.unit-btn').forEach(x => x.classList.toggle('active', x === b));
      };
    });
  }
  $('#value-color-label').textContent = isText ? '主色' : '线色';

  if (isText) {
    input.setAttribute('inputmode', 'text');
    input.setAttribute('pattern', '');
    input.placeholder = '输入文字';
    input.oninput = null;
  } else {
    input.setAttribute('inputmode', 'decimal');
    input.setAttribute('pattern', '[0-9.]*');
    input.placeholder = '例如 1200';
    input.oninput = () => {
      if (!vmState || vmState.type === 'text') return;
      let v = input.value.replace(/[^0-9.]/g, '');
      const firstDot = v.indexOf('.');
      if (firstDot >= 0) v = v.slice(0, firstDot + 1) + v.slice(firstDot + 1).replace(/\./g, '');
      if (v.startsWith('.')) v = '0' + v;
      if (v !== input.value) {
        const pos = input.selectionStart;
        input.value = v;
        try { input.setSelectionRange(Math.min(pos, v.length), Math.min(pos, v.length)); } catch (_) {}
      }
    };
  }

  renderValueLineColorGrid();

  $('#value-more-style').onclick = () => {
    modal.hidden = true;
    openStyleEditor(vmState.style, (newStyle) => {
      vmState.style = newStyle;
      if (vmState.mode === 'edit' && vmState.annotationId) applyVMToAnnotation();
      else syncStyleDefault(newStyle);
      modal.hidden = false;
      renderValueLineColorGrid();
    }, () => { modal.hidden = false; });
  };

  modal.querySelector('[data-action="confirm"]').onclick = () => {
    const v = input.value.trim();
    if (!v && !isText) return;
    modal.hidden = true;
    confirmValueModal(v + (isText ? '' : vmState.unit));
  };
  modal.querySelector('[data-action="cancel"]').onclick = cancelValueModal;
  modal.onclick = ev => {
    if (ev.target !== modal) return;
    const v = input.value.trim();
    if (v || isText) {
      modal.hidden = true;
      confirmValueModal(v + (isText ? '' : vmState.unit));
    } else {
      cancelValueModal();
    }
  };
  modal.hidden = false;
  setTimeout(() => { input.focus(); input.select(); }, 150);
}

function renderValueLineColorGrid() {
  if (!vmState) return;
  const grid = $('#value-line-color-grid');
  grid.innerHTML = COLORS.map(c =>
    `<div class="color-dot ${c.id === vmState.style.color ? 'active' : ''}"
      data-color="${c.id}" style="background:${c.css}"></div>`
  ).join('');
  grid.querySelectorAll('[data-color]').forEach(el => {
    el.onclick = () => {
      vmState.style.color = el.dataset.color;
      if (vmState.mode === 'edit' && vmState.annotationId) applyVMToAnnotation();
      else syncStyleDefault(vmState.style);
      renderValueLineColorGrid();
    };
  });
}

function applyVMToAnnotation() {
  if (!vmState || vmState.mode !== 'edit' || !vmState.annotationId) return;
  const a = state.annotations.find(x => x.id === vmState.annotationId);
  if (!a) return;
  a.color = vmState.style.color;
  a.weight = vmState.style.weight;
  a.endpointStyle = vmState.style.endpointStyle;
  a.fontSize = vmState.style.fontSize;
  a.showValue = vmState.style.showValue;
  a.textColorSame = vmState.style.textColorSame;
  a.textColor = vmState.style.textColor;
  a.labelPos = vmState.style.labelPos;
  syncStyleDefault(vmState.style);
  renderCanvas();
}

function confirmValueModal(text) {
  if (!vmState) return;
  const isText = vmState.type === 'text';
  if (vmState.mode === 'new') {
    const a = {
      id: uid(), type: 'line',
      x1: vmState.draft.start.x, y1: vmState.draft.start.y,
      x2: vmState.draft.end.x, y2: vmState.draft.end.y,
      text,
      color: vmState.style.color,
      weight: vmState.style.weight,
      showValue: vmState.style.showValue,
      endpointStyle: vmState.style.endpointStyle,
      fontSize: vmState.style.fontSize,
      textColorSame: vmState.style.textColorSame,
      textColor: vmState.style.textColor,
      labelPos: vmState.style.labelPos,
    };
    pushHistory();
    state.annotations.push(a);
    state.selectedAnnotationId = a.id;
    persistCurrent();
    renderCanvas();
    updateEditorFooter();
    syncStyleDefault(vmState.style);
  } else if (vmState.mode === 'edit') {
    const a = state.annotations.find(x => x.id === vmState.annotationId);
    if (a) {
      pushHistory();
      if (isText) {
        a.text = text || '？';
        a.color = vmState.style.color;
        a.fontSize = vmState.style.fontSize;
        a.textColorSame = vmState.style.textColorSame;
        a.textColor = vmState.style.textColor;
      } else {
        a.text = text;
        a.color = vmState.style.color;
        a.weight = vmState.style.weight;
        a.endpointStyle = vmState.style.endpointStyle;
        a.fontSize = vmState.style.fontSize;
        a.showValue = vmState.style.showValue;
        a.textColorSame = vmState.style.textColorSame;
        a.textColor = vmState.style.textColor;
        a.labelPos = vmState.style.labelPos;
      }
      persistCurrent();
      renderCanvas();
      syncStyleDefault(vmState.style);
    }
  }
  vmState = null;
}

function openStyleEditor(initialStyle, onApply, onCancel) {
  const modal = $('#modal-style');
  let lc = initialStyle.color;
  let lw = initialStyle.weight;
  let lep = initialStyle.endpointStyle;
  let lfs = initialStyle.fontSize;
  let lsv = initialStyle.showValue;
  let lts = initialStyle.textColorSame;
  let ltc = initialStyle.textColor;
  let lpos = initialStyle.labelPos;
  const isTextMode = vmState && vmState.type === 'text';

  $('#style-endpoint-section').hidden = !!isTextMode;
  $('#style-labelpos-section').hidden = !!isTextMode;
  $('#style-showvalue-section').hidden = !!isTextMode;
  $('#style-weight-section').hidden = !!isTextMode;
  $('#style-line-color-label').textContent = isTextMode ? '主色' : '线的颜色';

  const lineColorGrid = $('#line-color-grid');
  function renderLineColorGrid() {
    lineColorGrid.innerHTML = COLORS.map(c =>
      `<div class="color-dot ${c.id === lc ? 'active' : ''}"
        data-color="${c.id}" style="background:${c.css}"></div>`
    ).join('');
    lineColorGrid.querySelectorAll('[data-color]').forEach(el => {
      el.onclick = () => { lc = el.dataset.color; renderLineColorGrid(); renderStylePreview(); };
    });
  }
  renderLineColorGrid();

  const lineWeightSlider = $('#line-weight-slider');
  const lineWeightVal = $('#line-weight-val');
  lineWeightSlider.value = lw;
  lineWeightVal.textContent = lw.toFixed(1) + 'x';
  lineWeightSlider.oninput = () => {
    lw = parseFloat(lineWeightSlider.value);
    lineWeightVal.textContent = lw.toFixed(1) + 'x';
    renderStylePreview();
  };

  const endpointGrid = $('#endpoint-grid');
  function renderEndpointGrid() {
    endpointGrid.innerHTML = ENDPOINT_STYLES.map(s =>
      `<button class="endpoint-btn ${s.id === lep ? 'active' : ''}"
        data-ep="${s.id}" title="${s.label}">${endpointSvg(s.id)}</button>`
    ).join('');
    endpointGrid.querySelectorAll('[data-ep]').forEach(el => {
      el.onclick = () => { lep = el.dataset.ep; renderEndpointGrid(); renderStylePreview(); };
    });
  }
  renderEndpointGrid();

  const labelPosGrid = $('#label-pos-grid');
  function renderLabelPosGrid() {
    labelPosGrid.querySelectorAll('.label-pos-btn').forEach(el => {
      el.classList.toggle('active', el.dataset.pos === lpos);
    });
  }
  labelPosGrid.querySelectorAll('.label-pos-btn').forEach(el => {
    el.onclick = () => { lpos = el.dataset.pos; renderLabelPosGrid(); renderStylePreview(); };
  });
  renderLabelPosGrid();

  const textSameCb = $('#text-same-color');
  const textColorGrid = $('#text-color-grid');
  textSameCb.checked = lts;
  function renderTextColorGrid() {
    textColorGrid.innerHTML = COLORS.map(c =>
      `<div class="color-dot ${c.id === ltc ? 'active' : ''}"
        data-color="${c.id}" style="background:${c.css}"></div>`
    ).join('');
    textColorGrid.querySelectorAll('[data-color]').forEach(el => {
      el.onclick = () => { ltc = el.dataset.color; renderTextColorGrid(); renderStylePreview(); };
    });
  }
  renderTextColorGrid();
  textSameCb.onchange = () => {
    lts = textSameCb.checked;
    textColorGrid.style.opacity = lts ? '0.35' : '1';
    textColorGrid.style.pointerEvents = lts ? 'none' : 'auto';
    renderStylePreview();
  };
  textColorGrid.style.opacity = lts ? '0.35' : '1';
  textColorGrid.style.pointerEvents = lts ? 'none' : 'auto';

  const fontSlider = $('#font-size-slider');
  const fontVal = $('#font-size-val');
  fontSlider.value = lfs;
  fontVal.textContent = lfs.toFixed(1) + 'x';
  fontSlider.oninput = () => {
    lfs = parseFloat(fontSlider.value);
    fontVal.textContent = lfs.toFixed(1) + 'x';
    renderStylePreview();
  };

  const showValueCb = $('#show-value-toggle');
  showValueCb.checked = lsv;
  showValueCb.onchange = () => { lsv = showValueCb.checked; renderStylePreview(); };

  function renderStylePreview() {
    const pc = $('#style-preview-canvas');
    const px = pc.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    if (pc.width !== 280 * dpr) {
      pc.width = 280 * dpr; pc.height = 80 * dpr;
      pc.style.width = '280px'; pc.style.height = '80px';
    }
    px.setTransform(dpr, 0, 0, dpr, 0, 0);
    px.clearRect(0, 0, 280, 80);
    const lineColorCss = colorById(lc).css;
    const textColorCss = lts ? lineColorCss : colorById(ltc).css;

    if (isTextMode) {
      const label = '文字';
      const fs2 = 18 * lfs;
      px.font = `600 ${fs2}px -apple-system, sans-serif`;
      const tw = px.measureText(label).width;
      const padX = fs2 * 0.5, padY = fs2 * 0.3;
      const bw = tw + padX * 2, bh = fs2 + padY * 2;
      px.save();
      px.translate(140, 40);
      px.fillStyle = 'rgba(255,255,255,0.92)';
      roundRect(px, -bw / 2, -bh / 2, bw, bh, bh * 0.3);
      px.fill();
      px.fillStyle = textColorCss;
      px.textAlign = 'center'; px.textBaseline = 'middle';
      px.fillText(label, 0, 0);
      px.restore();
      return;
    }

    const x1 = 30, y1 = 55, x2 = 250, y2 = 25;
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const lw2 = 2 * lw, r2 = 7 * lw;
    px.save();
    px.lineCap = 'round';
    px.strokeStyle = lineColorCss;
    px.lineWidth = lw2;
    px.beginPath();
    px.moveTo(x1, y1); px.lineTo(x2, y2);
    px.stroke();
    px.restore();
    drawEndpoint(px, x1, y1, angle + Math.PI, lep, lineColorCss, r2);
    drawEndpoint(px, x2, y2, angle, lep, lineColorCss, r2);
    if (lsv) {
      const label = '120';
      const fs2 = 16 * lfs;
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      let labelAngle = angle;
      if (labelAngle > Math.PI / 2 || labelAngle < -Math.PI / 2) labelAngle += Math.PI;
      px.font = `600 ${fs2}px -apple-system, sans-serif`;
      const tw = px.measureText(label).width;
      const padX = fs2 * 0.4, padY = fs2 * 0.22;
      const bw = tw + padX * 2, bh = fs2 + padY * 2;
      let centerY;
      if (lpos === 'above') centerY = -(bh / 2 + fs2 * 0.35);
      else if (lpos === 'below') centerY = bh / 2 + fs2 * 0.35;
      else centerY = 0;
      px.save();
      px.translate(mx, my);
      px.rotate(labelAngle);
      px.fillStyle = 'rgba(255,255,255,0.92)';
      roundRect(px, -bw / 2, centerY - bh / 2, bw, bh, bh * 0.3);
      px.fill();
      px.fillStyle = textColorCss;
      px.textAlign = 'center'; px.textBaseline = 'middle';
      px.fillText(label, 0, centerY);
      px.restore();
    }
  }
  renderStylePreview();

  modal.querySelector('[data-action="apply"]').onclick = () => {
    modal.hidden = true;
    onApply({
      color: lc, weight: lw, endpointStyle: lep, fontSize: lfs,
      showValue: lsv, textColorSame: lts, textColor: ltc, labelPos: lpos,
    });
  };
  modal.querySelector('[data-action="cancel"]').onclick = () => {
    modal.hidden = true;
    if (onCancel) onCancel();
  };
  modal.onclick = ev => { if (ev.target === modal) modal.hidden = true; };
  modal.hidden = false;
}

function endpointSvg(style) {
  const color = '#0a84ff';
  const strokeAttr = `stroke="${color}" stroke-width="3" fill="none" stroke-linecap="round"`;
  switch (style) {
    case 'circle':
      return `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="12" fill="#fff" stroke="${color}" stroke-width="2"/><circle cx="20" cy="20" r="7" fill="${color}"/></svg>`;
    case 'dot':
      return `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="10" fill="${color}"/></svg>`;
    case 'square':
      return `<svg viewBox="0 0 40 40"><rect x="6" y="6" width="28" height="28" fill="#fff" stroke="${color}" stroke-width="2"/><rect x="13" y="13" width="14" height="14" fill="${color}"/></svg>`;
    case 'arrow':
      return `<svg viewBox="0 0 40 40"><polygon points="20,20 34,12 34,28" fill="${color}"/><line x1="4" y1="20" x2="18" y2="20" ${strokeAttr}/></svg>`;
    case 'tick':
      return `<svg viewBox="0 0 40 40"><line x1="20" y1="6" x2="20" y2="34" ${strokeAttr} stroke-width="4"/></svg>`;
    case 'none':
      return `<svg viewBox="0 0 40 40"><line x1="8" y1="32" x2="32" y2="8" stroke="#666" stroke-width="2" stroke-dasharray="3 3"/></svg>`;
  }
  return '';
}

function showAnnotationMenu(id) {
  state.selectedAnnotationId = id;
  renderCanvas();
  const a = state.annotations.find(x => x.id === id);
  const isText = a && a.type === 'text';
  showMenu('标注操作', [
    { label: isText ? '✏️ 编辑文字' : '✏️ 编辑数值', action: () => editValueOf(id) },
    { label: '🎨 样式', action: () => {
      const aa = state.annotations.find(x => x.id === id);
      if (!aa) return;
      openStyleEditor(makeStyleFromAnnotation(aa), (newStyle) => {
        pushHistory();
        aa.color = newStyle.color;
        aa.weight = newStyle.weight;
        aa.endpointStyle = newStyle.endpointStyle;
        aa.fontSize = newStyle.fontSize;
        aa.showValue = newStyle.showValue;
        aa.textColorSame = newStyle.textColorSame;
        aa.textColor = newStyle.textColor;
        aa.labelPos = newStyle.labelPos;
        persistCurrent(); renderCanvas(); syncStyleDefault(newStyle);
      });
    }},
    { label: '📋 复制', action: () => duplicateAnnotation(id) },
    { label: '⬆️ 上移一层', action: () => moveLayer(id, 'up') },
    { label: '⬇️ 下移一层', action: () => moveLayer(id, 'down') },
    { label: '🔝 置顶', action: () => moveLayer(id, 'top') },
    { label: '🔻 置底', action: () => moveLayer(id, 'bottom') },
    { label: '🗑 删除', action: () => deleteAnnotation(id), danger: true },
  ]);
}

function duplicateAnnotation(id) {
  const a = state.annotations.find(x => x.id === id);
  if (!a) return;
  pushHistory();
  const o = 0.03;
  const newA = Object.assign({}, a, {
    id: uid(),
    x1: a.x1 + o, y1: a.y1 + o,
    x2: a.x2 + o, y2: a.y2 + o,
  });
  state.annotations.push(newA);
  state.selectedAnnotationId = newA.id;
  persistCurrent(); renderCanvas();
}
function moveLayer(id, move) {
  const idx = state.annotations.findIndex(a => a.id === id);
  if (idx < 0 || state.annotations.length < 2) return;
  pushHistory();
  const [a] = state.annotations.splice(idx, 1);
  if (move === 'top') state.annotations.push(a);
  else if (move === 'bottom') state.annotations.unshift(a);
  else if (move === 'up') state.annotations.splice(Math.min(idx + 1, state.annotations.length), 0, a);
  else state.annotations.splice(Math.max(idx - 1, 0), 0, a);
  persistCurrent(); renderCanvas();
}
function deleteAnnotation(id) {
  pushHistory();
  state.annotations = state.annotations.filter(a => a.id !== id);
  if (state.selectedAnnotationId === id) state.selectedAnnotationId = null;
  persistCurrent(); renderCanvas(); updateEditorFooter();
}

function pushHistory() {
  state.history.push(JSON.parse(JSON.stringify(state.annotations)));
  if (state.history.length > 60) state.history.shift();
  updateEditorFooter();
}
function undo() {
  if (!state.history.length) return;
  state.annotations = state.history.pop();
  if (state.selectedAnnotationId &&
      !state.annotations.find(a => a.id === state.selectedAnnotationId)) {
    state.selectedAnnotationId = null;
  }
  persistCurrent(); renderCanvas(); updateEditorFooter();
}
async function persistCurrent() {
  if (!state.current || !state.currentImage) return;
  state.currentImage.annotations = state.annotations.map(a => Object.assign({}, a));
  state.current.updatedAt = Date.now();
  const ii = state.current.images.findIndex(x => x.id === state.currentImage.id);
  if (ii >= 0) state.current.images[ii] = state.currentImage;
  await DB.put(state.current);
  const pi = state.projects.findIndex(x => x.id === state.current.id);
  if (pi >= 0) state.projects[pi] = state.current;
}
function updateEditorFooter() {
  $('#btn-undo').disabled = state.history.length === 0;
  $('#btn-clear').disabled = state.annotations.length === 0;
}

async function renderImageToBlob(imageObj) {
  const img = await loadImageFromBlob(imageObj.imageBlob);
  const MAX = 2400;
  let w = img.naturalWidth, h = img.naturalHeight;
  if (Math.max(w, h) > MAX) {
    const s = MAX / Math.max(w, h);
    w = Math.round(w * s); h = Math.round(h * s);
  }
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const cx = c.getContext('2d');
  cx.drawImage(img, 0, 0, w, h);
  const rect = { x: 0, y: 0, w, h };
  for (const a of imageObj.annotations || []) drawAnnotationOn(cx, a, rect);
  drawWatermarkForExport(cx, w, h);
  return await new Promise(res => c.toBlob(res, 'image/png'));
}

async function exportCurrentImagePNG(includeBg) {
  if (!state.image || !state.currentImage) return;
  const imgW = state.image.naturalWidth;
  const imgH = state.image.naturalHeight;
  const MAX = 2400;
  let w = imgW, h = imgH;
  if (Math.max(w, h) > MAX) {
    const s = MAX / Math.max(w, h);
    w = Math.round(w * s); h = Math.round(h * s);
  }
  const out = document.createElement('canvas');
  out.width = w; out.height = h;
  const oc = out.getContext('2d');
  if (includeBg) oc.drawImage(state.image, 0, 0, w, h);
  const rect = { x: 0, y: 0, w, h };
  for (const a of state.annotations) drawAnnotationOn(oc, a, rect);
  drawWatermarkForExport(oc, w, h);
  const blob = await new Promise(res => out.toBlob(res, 'image/png'));
  await download(blob, `${sanitizeName(state.currentImage.name || '图片')}${includeBg ? '' : '-透明'}.png`);
  toast('已导出');
}

async function exportProjectPNGs(p) {
  if (!p.images.length) { toast('没有图片'); return; }
  busy(true, `导出 0 / ${p.images.length}`);
  try {
    for (let i = 0; i < p.images.length; i++) {
      busy(true, `导出 ${i + 1} / ${p.images.length}`);
      const blob = await renderImageToBlob(p.images[i]);
      await download(blob, `${sanitizeName(p.images[i].name || `图${i + 1}`)}.png`);
      await new Promise(r => setTimeout(r, 250));
    }
    toast(`已导出 ${p.images.length} 张`);
  } finally { busy(false); }
}

async function exportProjectsAsZip(projects, label) {
  if (!projects.length) { toast('没有可导出的房间'); return; }
  busy(true, `打包中…`);
  try {
    const files = [];
    const usedNamesByFolder = new Map();
    for (const p of projects) {
      const folderName = sanitizeName(p.folderName || '未分类');
      if (!usedNamesByFolder.has(folderName)) usedNamesByFolder.set(folderName, new Set());
      const used = usedNamesByFolder.get(folderName);
      const roomBase = sanitizeName(p.name || '未命名');
      for (let i = 0; i < p.images.length; i++) {
        const im = p.images[i];
        busy(true, `打包 ${folderName}/${roomBase} (${i + 1}/${p.images.length})`);
        let base = roomBase;
        let n = 2;
        while (used.has(base)) { base = `${roomBase}-${n}`; n++; }
        used.add(base);
        const blob = await renderImageToBlob(im);
        const buf = new Uint8Array(await blob.arrayBuffer());
        files.push({ path: `${folderName}/${base}.png`, data: buf });
      }
      await new Promise(r => setTimeout(r, 60));
    }
    const zip = buildZip(files);
    await download(zip, `图寸-${sanitizeName(label)}.zip`);
    toast('ZIP 已生成');
  } finally { busy(false); }
}

$('#editor-back').onclick = async () => {
  await persistCurrent();
  state.currentImage = null; state.image = null;
  state.annotations = []; state.history = [];
  state.pendingStart = null; state.dragCurrent = null;
  state.zoom = 1.0; state.panX = 0; state.panY = 0;
  state.editMode = 'pan';
  state.selectedAnnotationId = null;
  activePointers.clear();
  pinchState = null;
  vmState = null;
  if (state.current) { renderProjectPage(); showProject(); }
  else { showHome(); }
};
$('#editor-export').onclick = () => {
  showMenu('导出', [
    { label: '🖼 导出完整 PNG', action: () => exportCurrentImagePNG(true) },
    { label: '📄 导出透明底 PNG', action: () => exportCurrentImagePNG(false) },
  ]);
};

$('#editor-settings').onclick = () => {
  const modal = $('#modal-editor-settings');
  $('#setting-snap').checked = editorPrefs.snap;
  $('#setting-show-border').checked = editorPrefs.showBorder;
  $('#setting-watermark').checked = editorPrefs.watermark;
  $('#setting-snap').onchange = e => {
    editorPrefs.snap = e.target.checked; saveEditorPrefs();
    toast(editorPrefs.snap ? '端点吸附已开启' : '端点吸附已关闭');
  };
  $('#setting-show-border').onchange = e => {
    editorPrefs.showBorder = e.target.checked;
    saveEditorPrefs(); renderCanvas();
  };
  $('#setting-watermark').onchange = e => {
    editorPrefs.watermark = e.target.checked;
    saveEditorPrefs(); updateWatermarkLayer(); renderCanvas();
    toast(editorPrefs.watermark ? '水印已开启' : '水印已关闭');
  };
  $('#setting-reset-view').onclick = () => { resetView(); toast('视图已重置'); };
  modal.querySelector('[data-action="close"]').onclick = () => { modal.hidden = true; };
  modal.onclick = ev => { if (ev.target === modal) modal.hidden = true; };
  modal.hidden = false;
};

$('#btn-zoom-in').onclick = () => {
  state.zoom = Math.min(state.zoom * 1.25, 5);
  updateZoomLabel(); renderCanvas();
};
$('#btn-zoom-out').onclick = () => {
  state.zoom = Math.max(state.zoom / 1.25, 0.25);
  updateZoomLabel(); renderCanvas();
};
$('#zoom-label').onclick = () => { resetView(); toast('视图已重置'); };
$('#btn-undo').onclick = undo;
$('#btn-clear').onclick = () => {
  if (!state.annotations.length) return;
  if (!confirm('确定清空此图片的所有标注？')) return;
  pushHistory(); state.annotations = [];
  state.selectedAnnotationId = null;
  persistCurrent(); renderCanvas(); updateEditorFooter();
};
$('#search-input').addEventListener('input', e => {
  state.search = e.target.value;
  if (state.currentFolder === undefined) renderHome();
});

(function setupPWA() {
  const size = 1024;
  const c = document.createElement('canvas');
  c.width = size; c.height = size;
  const cx = c.getContext('2d');
  const bg = cx.createLinearGradient(0, 0, 0, size);
  bg.addColorStop(0, '#5aa03c');
  bg.addColorStop(1, '#1e3a15');
  cx.fillStyle = bg;
  cx.fillRect(0, 0, size, size);
  cx.save();
  cx.translate(size / 2, size / 2);
  cx.rotate(-6 * Math.PI / 180);
  cx.translate(-size / 2, -size / 2);
  const cardW = 620, cardH = 480;
  const cardX = (size - cardW) / 2;
  const cardY = (size - cardH) / 2;
  const cardR = 60;
  const photoGrad = cx.createLinearGradient(0, cardY, 0, cardY + cardH);
  photoGrad.addColorStop(0, '#7a7a7c');
  photoGrad.addColorStop(1, '#3a3a3c');
  cx.fillStyle = photoGrad;
  roundRect(cx, cardX, cardY, cardW, cardH, cardR);
  cx.fill();
  cx.save();
  roundRect(cx, cardX, cardY, cardW, cardH, cardR);
  cx.clip();
  cx.fillStyle = '#f0c66a';
  cx.beginPath();
  cx.arc(cardX + cardW * 0.72, cardY + cardH * 0.30, 55, 0, Math.PI * 2);
  cx.fill();
  cx.fillStyle = '#2c2c2e';
  cx.beginPath();
  cx.moveTo(cardX, cardY + cardH * 0.70);
  cx.lineTo(cardX + cardW * 0.35, cardY + cardH * 0.42);
  cx.lineTo(cardX + cardW * 0.55, cardY + cardH * 0.62);
  cx.lineTo(cardX + cardW * 0.78, cardY + cardH * 0.36);
  cx.lineTo(cardX + cardW, cardY + cardH * 0.72);
  cx.lineTo(cardX + cardW, cardY + cardH);
  cx.lineTo(cardX, cardY + cardH);
  cx.closePath();
  cx.fill();
  cx.fillStyle = '#1a1a1c';
  cx.beginPath();
  cx.moveTo(cardX, cardY + cardH * 0.86);
  cx.lineTo(cardX + cardW * 0.25, cardY + cardH * 0.66);
  cx.lineTo(cardX + cardW * 0.50, cardY + cardH * 0.82);
  cx.lineTo(cardX + cardW * 0.72, cardY + cardH * 0.60);
  cx.lineTo(cardX + cardW, cardY + cardH * 0.88);
  cx.lineTo(cardX + cardW, cardY + cardH);
  cx.lineTo(cardX, cardY + cardH);
  cx.closePath();
  cx.fill();
  cx.restore();
  cx.restore();
  const rulerW = 640, rulerH = 110;
  const rulerX = (size - rulerW) / 2;
  const rulerY = size / 2;
  const lineY = rulerY;
  const lineGrad = cx.createLinearGradient(rulerX - 200, 0, rulerX + rulerW + 200, 0);
  lineGrad.addColorStop(0, '#0a84ff');
  lineGrad.addColorStop(0.5, '#3a9cff');
  lineGrad.addColorStop(1, '#5ac8fa');
  cx.strokeStyle = lineGrad;
  cx.lineWidth = 22;
  cx.lineCap = 'round';
  cx.beginPath(); cx.moveTo(rulerX, lineY); cx.lineTo(rulerX - 80, lineY); cx.stroke();
  cx.beginPath(); cx.moveTo(rulerX + rulerW, lineY); cx.lineTo(rulerX + rulerW + 80, lineY); cx.stroke();
  cx.fillStyle = '#0a84ff';
  cx.beginPath();
  cx.moveTo(rulerX - 120, lineY);
  cx.lineTo(rulerX - 70, lineY - 40);
  cx.lineTo(rulerX - 70, lineY + 40);
  cx.closePath(); cx.fill();
  cx.fillStyle = '#5ac8fa';
  cx.beginPath();
  cx.moveTo(rulerX + rulerW + 120, lineY);
  cx.lineTo(rulerX + rulerW + 70, lineY - 40);
  cx.lineTo(rulerX + rulerW + 70, lineY + 40);
  cx.closePath(); cx.fill();
  cx.shadowColor = 'rgba(0,0,0,0.55)';
  cx.shadowBlur = 40; cx.shadowOffsetY = 16;
  cx.fillStyle = '#ffffff';
  roundRect(cx, rulerX, rulerY - rulerH / 2, rulerW, rulerH, 20);
  cx.fill();
  cx.shadowColor = 'transparent'; cx.shadowBlur = 0; cx.shadowOffsetY = 0;
  const rulerShade = cx.createLinearGradient(0, rulerY - rulerH / 2, 0, rulerY + rulerH / 2);
  rulerShade.addColorStop(0, 'rgba(0,0,0,0)');
  rulerShade.addColorStop(1, 'rgba(0,0,0,0.10)');
  cx.fillStyle = rulerShade;
  roundRect(cx, rulerX, rulerY - rulerH / 2, rulerW, rulerH, 20);
  cx.fill();
  cx.strokeStyle = '#1c1c1e';
  cx.lineCap = 'butt';
  cx.lineWidth = 7;
  for (let i = 1; i <= 5; i++) {
    const x = rulerX + rulerW * i / 6;
    cx.beginPath();
    cx.moveTo(x, rulerY - rulerH / 2);
    cx.lineTo(x, rulerY - rulerH / 2 + 42);
    cx.stroke();
  }
  cx.lineWidth = 4;
  for (let i = 1; i <= 11; i++) {
    if (i % 2 === 0) continue;
    const x = rulerX + rulerW * i / 12;
    cx.beginPath();
    cx.moveTo(x, rulerY - rulerH / 2);
    cx.lineTo(x, rulerY - rulerH / 2 + 26);
    cx.stroke();
  }
  const iconUrl = c.toDataURL('image/png');
  const link = document.createElement('link');
  link.rel = 'apple-touch-icon';
  link.href = iconUrl;
  document.head.appendChild(link);
  const manifest = {
    name: '图寸', short_name: 'PicDim',
    description: '图片尺寸标注工具',
    start_url: '.', display: 'standalone', orientation: 'portrait',
    background_color: '#000000', theme_color: '#1c1c1e',
    icons: [
      { src: iconUrl, sizes: '512x512',  type: 'image/png', purpose: 'any maskable' },
      { src: iconUrl, sizes: '1024x1024', type: 'image/png', purpose: 'any maskable' },
    ],
  };
  const mLink = document.createElement('link');
  mLink.rel = 'manifest';
  mLink.href = 'data:application/manifest+json;charset=utf-8,' + encodeURIComponent(JSON.stringify(manifest));
  document.head.appendChild(mLink);
})();

(async function init() {
  try {
    await DB.init();
    const raw = await DB.all();
    state.projects = raw.map(migrateProject);
    const foldersSet = new Set();
    for (const p of state.projects) if (p.folderName) foldersSet.add(p.folderName);
    const m = getFolderCreatedMap();
    let dirty = false;
    for (const f of foldersSet) {
      if (!m[f]) {
        let minT = Infinity;
        for (const p of state.projects) {
          if (p.folderName === f) minT = Math.min(minT, p.createdAt || 0);
        }
        m[f] = minT === Infinity ? Date.now() : minT;
        dirty = true;
      }
    }
    if (dirty) saveFolderCreatedMap(m);
    for (let i = 0; i < raw.length; i++) {
      if (!raw[i].images || (raw[i].images || []).some(im => !im.name)) {
        await DB.put(state.projects[i]);
      }
    }
  } catch (err) { console.error(err); alert('初始化失败：' + err.message); }
  showHome();
})();
</script>
</body>
</html>