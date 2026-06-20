import { c as createComponent, d as createAstro, m as maybeRenderHead, f as addAttribute, e as renderSlot, b as renderTemplate, r as renderComponent, u as unescapeHTML, l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_DVAIC14D.mjs';
import { a as $$ImageMod, $ as $$Icon, c as $$Section } from './Section_Bjo7aeEB.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                                            */
/* empty css                                                                */
/* empty css                                                                  */
/* empty css                                                                          */
/* empty css                                                                 */

const $$Astro$4 = createAstro();
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Grid;
  const { columns = 2 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card-grid astro-ex5q2lsb"${addAttribute(`--columns: ${columns}`, "style")}>${renderSlot($$result, $$slots["default"])}</div> `;
}, "/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/components/user-components/Grid.astro", void 0);

const $$Astro$3 = createAstro();
const $$ListCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ListCard;
  const { title, imageIcon, number, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute((`list-card ${image ? "list-card-wide" : ""}` ?? "") + " astro-lqc53zue", "class")}> <div class="list-card-header astro-lqc53zue"> <div class="flex items-center gap-2 astro-lqc53zue"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": imageIcon, "alt": title, "width": 30, "height": 30, "class:list": [["w-5", "h-5"], "astro-lqc53zue"] })} <h3 class="text-h6! mt-0! astro-lqc53zue"> ${title} </h3> </div> <span class="text-nowrap astro-lqc53zue">${number} 篇</span> </div> ${image ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-0! items-center astro-lqc53zue"> <div class="list-body astro-lqc53zue"> ${renderSlot($$result, $$slots["default"])} </div> <div class="bg-body mt-4 rounded-xl astro-lqc53zue"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": image, "alt": title, "width": 400, "height": 200, "class:list": [["w-full", "h-auto", "rounded-lg"], "astro-lqc53zue"] })} </div> </div>` : renderTemplate`<div class="list-body astro-lqc53zue"> ${renderSlot($$result, $$slots["default"])} </div>`} </div> `;
}, "/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/components/user-components/ListCard.astro", void 0);

const $$Astro$2 = createAstro();
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href, variant = "primary", className } = Astro2.props;
  let classes = "";
  if (variant === "primary") {
    classes += "";
  } else if (variant === "text") {
    classes += "flex items-center gap-2 text-black dark:text-white no-underline ";
  } else {
    classes += "";
  }
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute((` ${classes} ${className}` ?? "") + " astro-5eunqzkt", "class")}> ${renderSlot($$result, $$slots["default"])} <svg class="mt-0! astro-5eunqzkt" width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="link-arrow"> <path d="M1 15L8 8L1 1" class="stroke-black dark:stroke-white astro-5eunqzkt" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a> `;
}, "/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/components/LinkButton.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$AccordionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AccordionContainer;
  const { tabList } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="accordion-container astro-7kpxvxyf"> <div class="accordion-tabs astro-7kpxvxyf"> ', ' </div> <div class="accordion-list astro-7kpxvxyf"> ', ' </div> </div>  <script>\n  /**\n   * AccordionManager class to handle accordion tabs and content\n   */\n  class AccordionManager {\n    constructor() {\n      this.tabItems = document.querySelectorAll(".accordion-tab-item");\n      this.accordionItems = document.querySelectorAll(".accordion");\n      this.activeTabName = null;\n\n      this.init();\n    }\n\n    /**\n     * Initialize the accordion manager\n     */\n    init() {\n      this.bindTabEvents();\n      // this.bindAccordionEvents();\n      this.setDefaultActiveTab();\n    }\n\n    /**\n     * Bind click events to tab items\n     */\n    bindTabEvents() {\n      this.tabItems.forEach((tabItem) => {\n        tabItem.addEventListener("click", () => this.handleTabClick(tabItem));\n      });\n    }\n\n    /**\n     * Handle tab click event\n     * @param {HTMLElement} clickedTab - The clicked tab element\n     */\n    handleTabClick(clickedTab) {\n      this.setActiveTab(clickedTab);\n      this.showAccordionsForTab(clickedTab.getAttribute("data-tab"));\n      this.closeAllAccordions();\n    }\n\n    /**\n     * Set the active tab\n     * @param {HTMLElement} activeTab - The tab to make active\n     */\n    setActiveTab(activeTab) {\n      this.tabItems.forEach((item) => {\n        item.classList.remove("active-tab");\n      });\n      activeTab.classList.add("active-tab");\n      this.activeTabName = activeTab.getAttribute("data-tab");\n    }\n\n    /**\n     * Show accordions for the specified tab\n     * @param {string} tabName - The tab name to show accordions for\n     */\n    showAccordionsForTab(tabName) {\n      // First hide all accordions\n      this.accordionItems.forEach((accordion) => {\n        accordion.classList.remove("show-accordion", "fade-in");\n      });\n\n      // Small delay to ensure hiding animation completes\n      setTimeout(() => {\n        this.accordionItems.forEach((accordion, index) => {\n          const shouldShow = accordion.getAttribute("data-tab") === tabName;\n          if (shouldShow) {\n            accordion.classList.add("show-accordion");\n            // Add fade-in class with a slight delay for stagger effect\n            setTimeout(() => {\n              accordion.classList.add("fade-in");\n            }, index * 100); // 100ms delay between each accordion\n          }\n        });\n      }, 150); // 150ms delay before showing new accordions\n    }\n\n    /**\n     * Set the default active tab (first tab)\n     */\n    setDefaultActiveTab() {\n      if (this.tabItems.length > 0) {\n        const firstTab = this.tabItems[0];\n        firstTab.classList.add("active-tab");\n        this.activeTabName = firstTab.getAttribute("data-tab");\n        this.showAccordionsForTab(this.activeTabName);\n      }\n    }\n  }\n\n  /**\n   * Initialize the accordion manager\n   */\n  function initAccordion() {\n    new AccordionManager();\n  }\n\n  // Check if DOM is already loaded\n  if (document.readyState === "loading") {\n    document.addEventListener("DOMContentLoaded", initAccordion);\n  } else {\n    initAccordion();\n  }\n<\/script>'])), maybeRenderHead(), tabList.map((tab) => renderTemplate`<div class="accordion-tab-item  astro-7kpxvxyf"${addAttribute(tab.type, "data-tab")}> <div class="tab-icon astro-7kpxvxyf"> ${tab.icon === "rocket" && renderTemplate`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="astro-7kpxvxyf"> <path d="M9.62796 21.4367C9.88981 21.2636 10.2458 21.2923 10.4766 21.5226C10.7402 21.7862 10.7402 22.2141 10.4766 22.4777L3.81058 29.1437L3.70413 29.2307C3.44217 29.4033 3.08602 29.3743 2.8555 29.1437C2.59249 28.8802 2.59238 28.4531 2.8555 28.1896L9.52249 21.5226L9.62796 21.4367ZM13.628 25.4367C13.8898 25.2636 14.2458 25.2923 14.4766 25.5226C14.7402 25.7862 14.7402 26.2141 14.4766 26.4777L11.8106 29.1437L11.7041 29.2307C11.4422 29.4033 11.086 29.3743 10.8555 29.1437C10.5925 28.8802 10.5924 28.4531 10.8555 28.1896L13.5225 25.5226L13.628 25.4367ZM25.9229 2.69061C26.5001 2.66238 27.0203 2.63505 27.4532 2.68964C27.9287 2.74972 28.3495 2.91332 28.7178 3.28143C29.0863 3.64987 29.2495 4.07133 29.3096 4.54706C29.3642 4.97975 29.3369 5.49935 29.3086 6.07636C29.152 9.27747 28.1882 12.3775 25.8047 14.7609L23.8242 16.7424C22.9759 17.5907 22.5481 18.0296 22.3311 18.4533C22.1533 18.8007 22.0998 19.1822 22.2539 19.9865C22.4167 20.637 22.6041 21.3785 22.6055 22.0881C22.6069 22.8414 22.4007 23.6024 21.7539 24.2492C21.0954 24.9078 20.3637 25.3419 19.541 25.342C18.7185 25.3419 17.9867 24.9077 17.3282 24.2492L7.75003 14.6721C7.09162 14.0135 6.65824 13.2808 6.65823 12.4582C6.6585 11.6358 7.09162 10.9037 7.75003 10.2453C8.39684 9.59859 9.15889 9.39237 9.91214 9.39374C10.6204 9.39516 11.3603 9.58185 12.0098 9.74433C12.817 9.89939 13.1988 9.84636 13.5469 9.66815C13.9706 9.45114 14.4094 9.02346 15.2578 8.17499L17.2383 6.19452C19.6217 3.81112 22.7219 2.84726 25.9229 2.69061ZM25.9893 4.03925C23.0103 4.18504 20.2694 5.07158 18.1924 7.14862L16.2119 9.13007C15.4295 9.91252 14.8203 10.5322 14.1621 10.8693C13.4299 11.2443 12.6965 11.2523 11.7422 11.0676C11.7306 11.0653 11.7186 11.0626 11.7071 11.0598C11.0112 10.8858 10.4298 10.7443 9.90921 10.7433C9.42478 10.7425 9.0399 10.8646 8.70413 11.2004C8.17127 11.7333 8.00811 12.1413 8.00784 12.4582C8.00784 12.7751 8.17109 13.1837 8.70413 13.717L18.2823 23.2951C18.8156 23.8285 19.224 23.9913 19.541 23.9914C19.8581 23.9913 20.2664 23.8286 20.7998 23.2951C21.1356 22.9593 21.2568 22.5745 21.2559 22.09C21.2548 21.5696 21.1134 20.9888 20.9395 20.2932C20.9366 20.2815 20.9339 20.2688 20.9317 20.257C20.7471 19.303 20.755 18.5692 21.1299 17.8371C21.4671 17.179 22.0877 16.5697 22.8701 15.7873L24.8506 13.8068C26.9276 11.7298 27.8142 8.99002 27.96 6.01093C27.9905 5.38667 28.0071 5.00447 27.9707 4.716C27.9397 4.47089 27.8769 4.34975 27.7637 4.23651C27.6505 4.12341 27.5293 4.0595 27.2842 4.0285C26.9958 3.99215 26.6133 4.00872 25.9893 4.03925ZM5.62796 17.4367C5.88981 17.2636 6.24581 17.2923 6.47659 17.5226C6.7402 17.7862 6.7402 18.2141 6.47659 18.4777L3.81058 21.1437L3.70413 21.2307C3.44217 21.4033 3.08602 21.3743 2.8555 21.1437C2.59249 20.8802 2.59238 20.4531 2.8555 20.1896L5.52249 17.5226L5.62796 17.4367ZM22.8076 8.67206C23.1151 8.73497 23.3466 9.00714 23.3467 9.33319C23.3467 9.65939 23.1152 9.93139 22.8076 9.99433L22.6719 10.008H22.6612C22.2884 10.008 21.9864 9.70596 21.9864 9.33319C21.9865 8.96057 22.2885 8.65842 22.6612 8.65839H22.6719L22.8076 8.67206Z" fill="url(#paint0_linear_16_908)" class="astro-7kpxvxyf"></path> <defs class="astro-7kpxvxyf"> <linearGradient id="paint0_linear_16_908" x1="2.6582" y1="29.3415" x2="33.1171" y2="22.5645" gradientUnits="userSpaceOnUse" class="astro-7kpxvxyf"> <stop class="stop-color-1 astro-7kpxvxyf"></stop> <stop offset="0.5" class="stop-color-2 astro-7kpxvxyf"></stop> <stop offset="1" class="stop-color-3 astro-7kpxvxyf"></stop> </linearGradient> </defs> </svg>`} ${tab.icon === "settings" && renderTemplate`<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="astro-7kpxvxyf"> <path d="M14.21 0C14.7913 0.0436581 15.2753 0.30473 15.7471 0.673828C16.2062 1.03313 16.7207 1.54977 17.3496 2.17871C17.9416 2.77062 18.1257 2.94075 18.3379 3.03809C18.371 3.05322 18.4049 3.06664 18.4385 3.0791C18.6572 3.16017 18.9082 3.1709 19.7451 3.1709H19.8896C20.8757 3.1709 21.6842 3.16936 22.3203 3.25488C22.9755 3.34307 23.5494 3.5347 24.0078 3.99316C24.466 4.45167 24.658 5.02539 24.7461 5.68066C24.8316 6.31668 24.8301 7.12453 24.8301 8.11035V8.25586C24.8301 8.98822 24.8373 9.27167 24.8936 9.47754L24.9209 9.5625L24.9219 9.56348C24.934 9.59617 24.9477 9.6298 24.9629 9.66309L25.0029 9.74219C25.1089 9.92754 25.3048 10.1329 25.8223 10.6504C26.4512 11.2793 26.9669 11.7947 27.3262 12.2539C27.6951 12.7255 27.9573 13.209 28.001 13.79L28.0088 14C28.0088 14.0699 28.0062 14.1402 28.001 14.21C27.9573 14.7913 27.6953 15.2753 27.3262 15.7471C26.9669 16.2062 26.4511 16.7208 25.8223 17.3496C25.2302 17.9418 25.0604 18.1256 24.9629 18.3379C24.9475 18.3717 24.9338 18.4051 24.9219 18.4375L24.9209 18.4385C24.8398 18.6573 24.8301 18.9081 24.8301 19.7451V19.8896C24.8301 20.8756 24.8316 21.6843 24.7461 22.3203C24.6579 22.9755 24.4663 23.5494 24.0078 24.0078C23.5494 24.4663 22.9756 24.6579 22.3203 24.7461C21.6842 24.8316 20.8757 24.8301 19.8896 24.8301H19.7451C18.9079 24.8301 18.6573 24.8397 18.4385 24.9209L18.4375 24.9219C18.4049 24.9339 18.3709 24.9464 18.3369 24.9619L18.3379 24.9629C18.1256 25.0604 17.9418 25.2302 17.3496 25.8223C16.7207 26.4512 16.2062 26.9669 15.7471 27.3262C15.2753 27.6953 14.7913 27.9574 14.21 28.001C14.0703 28.0115 13.9296 28.0115 13.79 28.001C13.209 27.9573 12.7255 27.6951 12.2539 27.3262C11.7947 26.9669 11.2793 26.4512 10.6504 25.8223C10.1329 25.3048 9.92755 25.1089 9.74219 25.0029L9.66309 24.9629C9.62978 24.9476 9.5962 24.934 9.56348 24.9219L9.5625 24.9209C9.34362 24.8397 9.09306 24.8301 8.25586 24.8301H8.11035C7.12447 24.8301 6.3167 24.8316 5.68066 24.7461C5.02539 24.658 4.45167 24.466 3.99316 24.0078C3.53473 23.5494 3.34307 22.9755 3.25488 22.3203C3.16937 21.6843 3.1709 20.8756 3.1709 19.8896V19.7451C3.1709 18.9083 3.16014 18.6572 3.0791 18.4385C3.06665 18.4049 3.0532 18.371 3.03809 18.3379C2.94075 18.1257 2.77063 17.9416 2.17871 17.3496C1.54979 16.7207 1.03313 16.2062 0.673828 15.7471C0.304761 15.2754 0.0436899 14.7912 0 14.21C-0.0104309 14.0707 -0.0103919 13.9303 0 13.791C0.0435637 13.2097 0.304804 12.7257 0.673828 12.2539C1.03314 11.7946 1.54959 11.2795 2.17871 10.6504C2.77032 10.0588 2.94072 9.87511 3.03809 9.66309C3.05308 9.63041 3.06649 9.59641 3.0791 9.5625C3.16031 9.34362 3.17089 9.09293 3.1709 8.25586V8.11035C3.1709 7.12449 3.16942 6.31669 3.25488 5.68066C3.34302 5.02517 3.53462 4.45175 3.99316 3.99316C4.45176 3.53456 5.02513 3.34302 5.68066 3.25488C6.31672 3.1694 7.1244 3.1709 8.11035 3.1709H8.25586C9.09305 3.1709 9.34361 3.16032 9.5625 3.0791C9.59647 3.06647 9.63035 3.0531 9.66309 3.03809C9.87518 2.94074 10.0587 2.77043 10.6504 2.17871C11.2795 1.54957 11.7946 1.03315 12.2539 0.673828C12.7257 0.304746 13.2097 0.0435681 13.791 0C13.9303 -0.0104042 14.0707 -0.0104351 14.21 0ZM13.8916 1.3457C13.684 1.36126 13.4525 1.4506 13.0859 1.7373C12.7067 2.034 12.2587 2.47957 11.6055 3.13281C11.0833 3.65503 10.7093 4.04273 10.2256 4.26465C10.1621 4.29378 10.0975 4.32048 10.0322 4.34473V4.3457C9.5333 4.53082 8.99428 4.52051 8.25586 4.52051H8.11035C7.08629 4.52051 6.38556 4.52219 5.86035 4.59277C5.35466 4.66079 5.11321 4.78132 4.94727 4.94727C4.78136 5.11321 4.66078 5.35474 4.59277 5.86035C4.52221 6.38554 4.52051 7.0864 4.52051 8.11035V8.25586C4.52051 8.9942 4.53081 9.53333 4.3457 10.0322H4.34473C4.3205 10.0974 4.29375 10.1621 4.26465 10.2256C4.0427 10.7092 3.655 11.0833 3.13281 11.6055C2.47959 12.2587 2.03399 12.7067 1.7373 13.0859C1.45068 13.4524 1.36126 13.6841 1.3457 13.8916C1.34032 13.9638 1.34029 14.0372 1.3457 14.1094C1.3614 14.3168 1.45074 14.5488 1.7373 14.915C2.03404 15.2942 2.4797 15.7424 3.13281 16.3955C3.65463 16.9174 4.04275 17.291 4.26465 17.7744V17.7754C4.29357 17.8385 4.32136 17.9032 4.3457 17.9688C4.53062 18.4676 4.52051 19.0069 4.52051 19.7451V19.8896C4.52051 20.9135 4.52221 21.6145 4.59277 22.1396C4.66076 22.6449 4.78152 22.8869 4.94727 23.0527C5.11321 23.2185 5.35507 23.3402 5.86035 23.4082C6.38554 23.4788 7.08637 23.4805 8.11035 23.4805H8.25586C8.99428 23.4805 9.53329 23.4701 10.0322 23.6553H10.0312C10.0976 23.6798 10.1629 23.7066 10.2256 23.7354L10.4023 23.8271C10.8048 24.0571 11.1486 24.4104 11.6055 24.8672C12.2586 25.5203 12.7067 25.967 13.0859 26.2637C13.4065 26.5144 13.6242 26.6143 13.8125 26.6455L13.8916 26.6543C13.9636 26.6597 14.0371 26.6597 14.1094 26.6543C14.3168 26.6387 14.5487 26.5502 14.915 26.2637C15.2943 25.9669 15.7422 25.5205 16.3955 24.8672C16.9177 24.3451 17.2909 23.9573 17.7744 23.7354H17.7754C17.8376 23.7069 17.9022 23.6799 17.9688 23.6553C18.4677 23.4702 19.0066 23.4805 19.7451 23.4805H19.8896C20.9135 23.4805 21.6145 23.4788 22.1396 23.4082C22.6453 23.3402 22.8868 23.2186 23.0527 23.0527C23.2187 22.8868 23.3402 22.6452 23.4082 22.1396C23.4788 21.6145 23.4805 20.9135 23.4805 19.8896V19.7451C23.4805 19.0067 23.4702 18.4677 23.6553 17.9688C23.6798 17.9023 23.7069 17.8376 23.7354 17.7754V17.7744C23.9573 17.2909 24.3451 16.9177 24.8672 16.3955C25.5205 15.7422 25.9669 15.2943 26.2637 14.915C26.5502 14.5488 26.6386 14.3167 26.6543 14.1094C26.657 14.0733 26.6582 14.0361 26.6582 14L26.6543 13.8916C26.6388 13.6842 26.55 13.4521 26.2637 13.0859C25.967 12.7067 25.5203 12.2586 24.8672 11.6055C24.4104 11.1486 24.0571 10.8047 23.8271 10.4023L23.7354 10.2256C23.7066 10.1629 23.6798 10.0975 23.6553 10.0312C23.4704 9.5325 23.4805 8.99393 23.4805 8.25586V8.11035C23.4805 7.08646 23.4788 6.38552 23.4082 5.86035C23.3402 5.35507 23.2185 5.11321 23.0527 4.94727C22.8869 4.78151 22.645 4.66076 22.1396 4.59277C21.6145 4.52221 20.9136 4.52051 19.8896 4.52051H19.7451C19.0068 4.52051 18.4676 4.53065 17.9688 4.3457C17.9031 4.32135 17.8386 4.29358 17.7754 4.26465H17.7744C17.291 4.04275 16.9174 3.65462 16.3955 3.13281C15.7424 2.47969 15.2942 2.03404 14.915 1.7373C14.5487 1.45067 14.3168 1.36137 14.1094 1.3457C14.0371 1.34029 13.9639 1.34031 13.8916 1.3457ZM14 8.65918C16.95 8.65936 19.3418 11.051 19.3418 14.001C19.3414 16.9506 16.9497 19.3426 14 19.3428C11.0503 19.3426 8.65864 16.9506 8.6582 14.001C8.6582 11.051 11.05 8.65936 14 8.65918ZM14 10.0088C11.7956 10.009 10.0078 11.7965 10.0078 14.001C10.0083 16.205 11.7959 17.992 14 17.9922C16.2041 17.992 17.9908 16.205 17.9912 14.001C17.9912 11.7965 16.2044 10.009 14 10.0088Z" fill="url(#paint0_linear_940_30)" class="astro-7kpxvxyf"></path> <defs class="astro-7kpxvxyf"> <linearGradient id="paint0_linear_940_30" x1="-0.00781269" y1="28.0089" x2="31.9735" y2="20.893" gradientUnits="userSpaceOnUse" class="astro-7kpxvxyf"> <stop class="stop-color-1 astro-7kpxvxyf"></stop> <stop offset="0.5" class="stop-color-2 astro-7kpxvxyf"></stop> <stop offset="1" class="stop-color-3 astro-7kpxvxyf"></stop> </linearGradient> </defs> </svg>`} ${tab.icon === "support" && renderTemplate`<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="astro-7kpxvxyf"> <path d="M16.8652 25.5146C17.1334 25.256 17.5605 25.2632 17.8193 25.5312C18.0779 25.7993 18.0704 26.2264 17.8027 26.4854C15.7003 28.5156 12.3008 28.5155 10.1982 26.4854C9.93011 26.2264 9.92269 25.7994 10.1816 25.5312C10.4406 25.2633 10.8676 25.2558 11.1357 25.5146C12.7151 27.0396 15.2859 27.0397 16.8652 25.5146ZM14 -0.0078125C21.7363 -0.0076352 28.0086 6.26366 28.0088 14V19.334C28.0087 19.7414 27.9544 20.149 27.8457 20.5469C27.6444 21.2836 27.235 21.9292 26.8086 22.4873C26.4007 23.0211 25.8837 23.5853 25.5342 24.0098C25.1687 24.4536 24.8784 24.8239 24.4883 25.043C24.0807 25.2717 23.6086 25.3716 23.1416 25.334C22.6986 25.2981 22.2712 25.0931 21.7217 24.8428C21.2497 24.6278 20.4074 24.2926 20.0967 23.373C20.0118 23.1215 19.9951 22.854 19.9922 22.5615V16.1045C19.9951 15.8121 20.0118 15.5444 20.0967 15.293C20.4074 14.3737 21.2497 14.0392 21.7217 13.8242C22.2712 13.5739 22.6986 13.3689 23.1416 13.333C23.6086 13.2953 24.0807 13.3953 24.4883 13.624C24.7758 13.7854 24.9972 14.0057 25.167 14.2002C25.3133 14.3679 25.5065 14.6234 25.5986 14.7354L26.4336 15.7588C26.5122 15.8572 26.5862 15.9534 26.6582 16.0459V14C26.658 7.00925 20.9907 1.34197 14 1.3418C7.00925 1.34197 1.34197 7.00925 1.3418 14V16.0459C1.63859 15.6644 1.99143 15.2344 2.40234 14.7354C2.86542 14.173 3.56376 13.2282 4.85938 13.333C5.30202 13.369 5.72907 13.5741 6.27832 13.8242C6.69073 14.0121 7.02859 14.1586 7.29102 14.3867C8.01687 15.0181 8.00879 15.8501 8.00879 16.4062V22.2607C8.00879 22.817 8.01665 23.648 7.29102 24.2793C7.02851 24.5076 6.69091 24.6539 6.27832 24.8418C5.72896 25.0921 5.3021 25.298 4.85938 25.334C3.61659 25.4346 2.93244 24.5755 2.46582 24.0088C2.1165 23.5846 1.60004 23.0207 1.19238 22.4873C0.765917 21.9293 0.356662 21.2836 0.155273 20.5469L0.0839844 20.2461C0.0237107 19.9489 -0.00593149 19.6478 -0.00683594 19.3467C-0.00691907 19.3424 -0.00780748 19.3382 -0.0078125 19.334V14C-0.007637 6.26367 6.26367 -0.00763636 14 -0.0078125ZM4.75 14.6787C4.26656 14.6396 4.00708 14.9094 3.44434 15.5928C2.80905 16.3644 2.35646 16.9153 2.03125 17.377C1.71088 17.8317 1.54328 18.1601 1.45703 18.4756C1.30317 19.0388 1.30321 19.6272 1.45703 20.1904C1.59136 20.6821 1.88089 21.1658 2.26465 21.668C2.66709 22.1945 3.07334 22.6225 3.50879 23.1514C4.03142 23.7861 4.29337 24.0252 4.75 23.9883C4.89996 23.9761 5.072 23.9079 5.71875 23.6133C6.21071 23.3893 6.32657 23.3292 6.40527 23.2607C6.61722 23.0762 6.65819 22.8647 6.6582 22.2607V16.4062C6.6582 15.8021 6.61738 15.5898 6.40527 15.4053C6.32652 15.3368 6.21053 15.2768 5.71875 15.0527C5.07216 14.7583 4.89999 14.6909 4.75 14.6787ZM23.25 14.6777C23.1001 14.69 22.9277 14.7582 22.2812 15.0527C21.6887 15.3227 21.4685 15.4518 21.376 15.7256C21.3506 15.8009 21.3418 15.8985 21.3418 16.4062V22.2607C21.3418 22.769 21.3505 22.8661 21.376 22.9414C21.4685 23.2151 21.6887 23.3443 22.2812 23.6143C22.9284 23.9091 23.101 23.9761 23.251 23.9883C23.4569 24.0047 23.6596 23.9593 23.8271 23.8652C23.9436 23.7998 24.0553 23.682 24.4922 23.1514C24.9276 22.6226 25.3339 22.1946 25.7363 21.668C26.12 21.1658 26.4087 20.682 26.543 20.1904C26.6968 19.6273 26.6968 19.0388 26.543 18.4756C26.4567 18.1602 26.2899 17.8315 25.9697 17.377C25.6445 16.9153 25.1919 16.3644 24.5566 15.5928C24.3765 15.3741 24.3004 15.2597 24.1504 15.0879C24.024 14.9432 23.9207 14.8533 23.8271 14.8008C23.6595 14.7067 23.456 14.6612 23.25 14.6777Z" fill="url(#paint0_linear_940_35)" class="astro-7kpxvxyf"></path> <defs class="astro-7kpxvxyf"> <linearGradient id="paint0_linear_940_35" x1="-0.00781269" y1="28.008" x2="31.9735" y2="20.8922" gradientUnits="userSpaceOnUse" class="astro-7kpxvxyf"> <stop class="stop-color-1 astro-7kpxvxyf"></stop> <stop offset="0.5" class="stop-color-2 astro-7kpxvxyf"></stop> <stop offset="1" class="stop-color-3 astro-7kpxvxyf"></stop> </linearGradient> </defs> </svg>`} ${["rocket", "settings", "support"].includes(tab.icon) === false && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": tab.icon ? tab.icon : "rocket", "size": "1.8rem", "class": "astro-7kpxvxyf" })}`} </div> <div class="tab-text astro-7kpxvxyf"> <h3 class="astro-7kpxvxyf">${tab.title}</h3> <p class="astro-7kpxvxyf">${tab.subtitle}</p> </div> </div>`), renderSlot($$result, $$slots["default"]));
}, "/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/components/AccordionContainer.astro", void 0);

const $$Astro = createAstro();
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Accordion;
  const { type, question, answer } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute("accordion " + (type ? "mt-0!" : " show-accordion mt-10") + " astro-oqjbs5yv", "class")}${addAttribute(type || "", "data-tab")}> <div class="accordion-header astro-oqjbs5yv"> <h4 class="astro-oqjbs5yv">${question}</h4> <div class="accordion-icon astro-oqjbs5yv"> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="astro-oqjbs5yv"> <path class="vertical-line astro-oqjbs5yv" fill-rule="evenodd" clip-rule="evenodd" d="M8.47821 6.52114V0H6.52169V6.52114H0V8.47766H6.52169V15H8.47821V8.47766H15V6.52114H8.47821Z" fill="currentColor"></path> <path class="horizontal-line astro-oqjbs5yv" fill-rule="evenodd" clip-rule="evenodd" d="M0 6.52114V8.47766H15V6.52114H0Z" fill="currentColor"></path> </svg> </div> </div> <div class="accordion-body astro-oqjbs5yv">${unescapeHTML(answer)}</div> </div> `;
}, "/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/components/Accordion.astro", void 0);

const frontmatter = {
  "title": "超級簡單寫 CSS (Super Easy CSS)",
  "description": "超級簡單寫 CSS (Super Easy CSS) - Learn CSS the easy way.",
  "template": "splash",
  "hero": {
    "title": "超級簡單寫 CSS <span data-icon-path='hero-icon.svg'></span>\n<span class=\"light-text\">(Super Easy CSS)</span>\n",
    "tagline": "超級簡單寫 CSS，讓網頁設計變得簡單有趣。"
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$Section, {
      title: "所需的 CSS 前端知識 <span class='light-text'>盡可能都在這裡</span>",
      description: "打造靜態網頁必備的知識",
      children: createVNode($$Grid, {
        columns: 4,
        children: [createVNode($$ListCard, {
          title: "基礎知識 / 共用觀念",
          imageIcon: "/src/assets/element.svg",
          number: "17",
          children: [createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/basics/glossary-of-web-development/",
                children: "網頁的基本名詞：UI/UX？切版&切圖？前端&後端？靜態&動態？RWD or Mobile First？"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/basics/about-browsers/",
                children: "關於各家瀏覽器，前端必備的小知識：支援度、市佔率、CSS 實驗語法 -webkit-, -moz-… PostCSS Autoprefixer"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/basics/git-github-gitlab-git-flow/",
                children: "人在江湖，版控要有：了解 GIT / GitHub / GitLab / Git Flow"
              })
            }), "\n"]
          }), createVNode($$LinkButton, {
            href: "/basics/glossary-of-web-development/",
            variant: "text",
            className: "mt-6 mb-8 ml-4",
            "set:html": "查看全部文章"
          })]
        }), createVNode($$ListCard, {
          title: "版面編排",
          imageIcon: "/src/assets/changelogs.svg",
          number: "12",
          children: [createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/layout/css-box-model/",
                children: "CSS 盒子模型 (Box Model)：border-box & content-box"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/layout/css-units/",
                children: "網頁使用的單位大解析：px、rem、em、%、vw、vh (dvh, lvh, svh)、vmin、vmax"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/layout/css-block-inline-inline-block/",
                children: "CSS block、inline、inline-block：網頁排版的御三家"
              })
            }), "\n"]
          }), createVNode($$LinkButton, {
            href: "/layout/css-box-model/",
            variant: "text",
            className: "mt-6 mb-8 ml-4",
            "set:html": "查看全部文章"
          })]
        }), createVNode($$ListCard, {
          title: "響應式 RWD",
          imageIcon: "/src/assets/layouts.svg",
          number: "3",
          children: [createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/rwd/css-media-queries/",
                children: "RWD & CSS Media Queries"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/rwd/css-container-queries/",
                children: "CSS Container Queries 容器查詢：讓CSS的計算以容器自身為依據"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/rwd/css-media-print/",
                children: "CSS 列印的小技巧：@media print、break-before/after/inside、@page"
              })
            }), "\n"]
          }), createVNode($$LinkButton, {
            href: "/rwd/css-media-queries/",
            variant: "text",
            className: "mt-6 mb-8 ml-4",
            "set:html": "查看全部文章"
          })]
        }), createVNode($$ListCard, {
          title: "文字",
          imageIcon: "/src/assets/content.svg",
          number: "5",
          children: [createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/text/css-font-family-font-weight/",
                children: "網頁載入字體、Icon Font 與 CSS font-family、font-weight"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/text/css-text-wrap-balance-pretty/",
                children: "用 CSS 解決網頁的「標題不平衡」與「孤字不成行」： text-wrap: balance / pretty"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/text/css-white-space-word-breakline-clamp/",
                children: "CSS 文字過長、行數過多顯示點點點、文字自動折行、強制換行：white-space、word-break、-webkit-line-clamp 的妙用"
              })
            }), "\n"]
          }), createVNode($$LinkButton, {
            href: "/text/css-font-family-font-weight/",
            variant: "text",
            className: "mt-6 mb-8 ml-4",
            "set:html": "查看全部文章"
          })]
        }), createVNode($$ListCard, {
          title: "顏色",
          imageIcon: "/src/assets/element.svg",
          number: "4",
          children: [createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/color/css-colors-hex-rgb-hsl-lch-oklch/",
                children: "了解顏色的三種表示法：Hex、RGB/RGBA、HSL/HSLA 與 LAB / LCH / OKLab / OKLCH"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/color/css-prefers-color-scheme/",
                children: "根據瀏覽器的主題配色做切換：CSS @media (prefers-color-scheme)"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/color/css-color-scheme-light-dark/",
                children: "淺色主題與深色主題的救星：CSS color-scheme & light-dark()"
              })
            }), "\n"]
          }), createVNode($$LinkButton, {
            href: "/color/css-colors-hex-rgb-hsl-lch-oklch/",
            variant: "text",
            className: "mt-6 mb-8 ml-4",
            "set:html": "查看全部文章"
          })]
        }), createVNode($$ListCard, {
          title: "多媒體",
          imageIcon: "/src/assets/layouts.svg",
          number: "3",
          children: [createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/multimedia/css-object-fit-background-size-aspect-ratio/",
                children: "CSS object-fit、background-size、aspect-ratio：圖片與影片尺寸、比例"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/multimedia/html-video-youtube-iframe/",
                children: "HTML <video> 與 YouTube iframe：嵌入影片到網頁"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/multimedia/image-1x-2x-3x-srcset-resolution/",
                children: "讓圖片更清晰：image 1x 2x 3x srcset resolution 解析度"
              })
            }), "\n"]
          }), createVNode($$LinkButton, {
            href: "/multimedia/css-object-fit-background-size-aspect-ratio/",
            variant: "text",
            className: "mt-6 mb-8 ml-4",
            "set:html": "查看全部文章"
          })]
        }), createVNode($$ListCard, {
          title: "繪製漸層與圖形",
          imageIcon: "/src/assets/layouts.svg",
          number: "9",
          children: [createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/gradients-shapes/css-gradient/",
                children: "CSS 漸層 Gradient：linear-gradient、radial-gradient、conic-gradient"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/gradients-shapes/css-border-radius/",
                children: "CSS border-radius：圓角與橢圓"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/gradients-shapes/css-clip-path/",
                children: "CSS clip-path：裁切出各種形狀"
              })
            }), "\n"]
          }), createVNode($$LinkButton, {
            href: "/gradients-shapes/css-gradient/",
            variant: "text",
            className: "mt-6 mb-8 ml-4",
            "set:html": "查看全部文章"
          })]
        }), createVNode($$ListCard, {
          title: "互動 - Transition",
          imageIcon: "/src/assets/changelogs.svg",
          number: "6",
          children: [createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/interaction-transition/css-transition/",
                children: "CSS Transition：平滑的過渡動畫"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/interaction-transition/css-transform/",
                children: "CSS Transform：2D 與 3D 變形"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/interaction-transition/css-starting-style-transition-behavior-allow-discrete/",
                children: "讓 display 與 height auto 也能有動畫：CSS @starting-style 與 transition-behavior: allow-discrete"
              })
            }), "\n"]
          }), createVNode($$LinkButton, {
            href: "/interaction-transition/css-transition/",
            variant: "text",
            className: "mt-6 mb-8 ml-4",
            "set:html": "查看全部文章"
          })]
        }), createVNode($$ListCard, {
          title: "互動 - Animation",
          imageIcon: "/src/assets/changelogs.svg",
          number: "8",
          children: [createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/interaction-animation/css-animation/",
                children: "CSS Animation：製作關鍵影格動畫"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/interaction-animation/css-marquee/",
                children: "CSS 無限跑馬燈 Marquee：讓文字或圖片持續滾動"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/interaction-animation/css-images-slider-fade-effects/",
                children: "CSS 圖片輪播淡入淡出效果：Image Slider Fade Effects"
              })
            }), "\n"]
          }), createVNode($$LinkButton, {
            href: "/interaction-animation/css-animation/",
            variant: "text",
            className: "mt-6 mb-8 ml-4",
            "set:html": "查看全部文章"
          })]
        }), createVNode($$ListCard, {
          title: "Sass/SCSS",
          imageIcon: "/src/assets/code-block.svg",
          number: "12",
          children: [createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/sass-scss/scss-intro/",
                children: "SASS/SCSS (1) 安裝與環境設定"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/sass-scss/scss-variables-nesting/",
                children: "SASS/SCSS (2) 變數 Variables / 巢狀寫法 Nesting"
              })
            }), "\n", createVNode(_components.li, {
              children: createVNode(_components.a, {
                href: "/sass-scss/scss-use-import-default/",
                children: "SASS/SCSS (3) 使用檔案管理樣式 Partials / Modules (@use / @import / !default)"
              })
            }), "\n"]
          }), createVNode($$LinkButton, {
            href: "/sass-scss/scss-intro/",
            variant: "text",
            className: "mt-6 mb-8 ml-4",
            "set:html": "查看全部文章"
          })]
        })]
      })
    }), "\n", "\n", createVNode($$Section, {
      title: "常見問題 <span class='light-text'>Super Easy CSS？</span>",
      description: "這裡有許多常見問題，也許你可以找到答案。",
      children: createVNode($$AccordionContainer, {
        tabList: [{
          type: 'basic',
          title: '文章特色與適合對象',
          subtitle: '這系列的教學文章主要在講什麼？適合誰閱讀？',
          icon: "rocket"
        }, {
          type: 'setting',
          title: '學習資源與實作方式',
          subtitle: '如何進行練習？哪裡可以看到程式碼？',
          icon: "settings"
        }, {
          type: 'help',
          title: '關於作者與未來更新',
          subtitle: '作者是誰？文章是否還會更新？',
          icon: "support"
        }],
        children: [createVNode($$Accordion, {
          question: "這系列文章適合完全沒有程式背景的新手嗎？",
          answer: "非常適合！《超級簡單寫 CSS》的目標就是讓新手也能輕鬆上手。除了 CSS 核心語法，我也會在前幾章介紹 HTML 基礎、網頁運作原理、版本控制（Git）等前端必備知識。無論你是想轉職前端工程師，或是想了解網頁技術的設計師、PM，甚至是業主，這系列文章都能幫助你建立全面的觀念。",
          type: "basic"
        }), createVNode($$Accordion, {
          question: "已經有前端經驗的開發者，能從這裡學到東西嗎？",
          answer: "當然可以！這系列文章橫跨 2023 至 2025 年的 iThome 鐵人賽內容，除了基礎知識，我特別整理了許多 CSS 新屬性與現代寫法（如 CSS Nesting、Container Queries、has()、anchor positioning 等）。如果您想更新技術棧，不再使用舊時代的寫法，這裡有許多「酷炫又令人期待」的新語法教學。",
          type: "basic"
        }), createVNode($$Accordion, {
          question: "這系列教學與網路上其他的 CSS 教程有什麼不同？",
          answer: "最大的不同在於 「圖解說明」 與 「實務經驗」。我知道程式概念很抽象，所以我使用了大量的圖解與比喻來幫助理解。同時，我不只教語法，更結合了我 10 年跨領域（設計+前端）的實務經驗，告訴你在實際開發中該如何應用這些技術，以及如何避免常見的踩雷點。",
          type: "basic"
        }), createVNode($$Accordion, {
          question: "如何進行練習？哪裡可以看到程式碼？",
          answer: "為了讓大家能快速看到效果並動手修改，我將所有的實作 Demo 都放在我的 <a href='https://codepen.io/im1010ioio' target='_blank'>CodePen</a> 上。您可以直接在線上檢視程式碼、調整參數，即時看到網頁畫面的變化，這也是學習 CSS 最快的方式！",
          type: "setting"
        }), createVNode($$Accordion, {
          question: "建議使用什麼裝置來閱讀這系列教學文章？",
          answer: "雖然手機也能瀏覽，但我強烈建議使用桌機（Desktop）或筆電來閱讀。原因有三點：首先，電腦螢幕能完整呈現寬幅的圖解與程式碼區塊，版面閱讀體驗最佳；其次，方便直接複製程式碼進行測試；最後，學習前端需要常看瀏覽器的開發者工具（DevTools），用電腦才能隨時查看原始碼，這對理解網頁運作非常有幫助。",
          type: "setting"
        }), createVNode($$Accordion, {
          question: "這系列文章會教到 CSS 框架或預處理器嗎？",
          answer: "會的。在掌握原生 CSS 後，系列文章後段會介紹業界常用的 CSS 預處理器 SASS/SCSS 的環境設定與語法（變數、巢狀、Mixins 等）。此外，我即將要撰寫關於 Tailwind CSS、Bootstrap 等熱門 CSS 框架的探討與原子設計（Atomic Design）概念，幫助你順利銜接現代化的開發流程。",
          type: "setting"
        }), createVNode($$Accordion, {
          question: "除了 CSS 樣式，我還會學到哪些網頁相關知識？",
          answer: "前端開發不僅僅是把畫面切出來。本系列還涵蓋了 RWD 響應式網頁設計、SEO（搜尋引擎優化）基本觀念、以及如何與設計師或後端工程師溝通的相關術語。目標是讓你對網頁前端開發有一個「初步且全面」的認識。",
          type: "setting"
        }), createVNode($$Accordion, {
          question: "關於作者與未來更新",
          answer: "嗨！我是 <a href='https://im1010ioio.dev/' target='_blank'>陳依琳 (im1010ioio)</a>，<a href='https://healthyplate.app/zh/' target='_blank'>Healthy Plate</a> 的首席設計師。我擁有 10 年數位設計與網頁前端開發的跨領域經驗，目前擔任前端工程師，同時也是 Notion 創作者與設計師。我擅長將抽象的技術概念轉化為具體的視覺圖解，希望能用「設計師的美感」與「工程師的邏輯」帶大家進入網頁開發的世界。",
          type: "help"
        }), createVNode($$Accordion, {
          question: "我發現有些文章標記「待補」或內容較短，之後會更新嗎？",
          answer: "是的，請不用擔心！寫作期間因身體微恙，導致少部分章節未能即時完稿，目前我正在規劃更新與補齊這些內容。另外，針對 AI 時代的學習，預計會重新檢視過去的所有文章，並且調整文章方向，加以打磨。這是一個持續成長的系列文章，希望能提供最完整的學習資源。",
          type: "help"
        }), createVNode($$Accordion, {
          question: "如果我覺得文章很有幫助，可以如何支持作者？",
          answer: "很高興這些內容能幫助到你！如果你喜歡我的文章，歡迎追蹤我的 Instagram (@im1010ioio) 關注最新動態。如果想給予實質的鼓勵，歡迎 <a href='https://im1010ioio.bobaboba.me/' target='_blank'>🧋贊助我一杯珍奶</a>，這對持續創作的我來說是莫大的動力！",
          type: "help"
        }), createVNode($$Accordion, {
          question: "我有技術問題或想交流，該如何聯繫妳？",
          answer: "您可以透過我的 CodePen、LinkedIn 或 Instagram 與我聯繫。無論是技術討論、文章勘誤或是單純想聊聊前端與設計，都非常歡迎！",
          type: "help"
        })]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/docs/index.mdx";
const file = "/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/content/docs/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
