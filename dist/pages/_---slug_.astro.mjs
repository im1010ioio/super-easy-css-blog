import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_DVAIC14D.mjs';
import 'piccolore';
import { $ as $$Common, p as paths } from '../chunks/common_B6X72EWR.mjs';
export { renderers } from '../renderers.mjs';

const prerender = true;
async function getStaticPaths() {
  return paths;
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CommonPage", $$Common, {})}`;
}, "/Users/chenyilin/Documents/GitHub/super-easy-css-blog/node_modules/@astrojs/starlight/routes/static/index.astro", void 0);

const $$file = "/Users/chenyilin/Documents/GitHub/super-easy-css-blog/node_modules/@astrojs/starlight/routes/static/index.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
