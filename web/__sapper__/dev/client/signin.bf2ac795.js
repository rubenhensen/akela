import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, Q as set_input_value, R as run_all, C as listen_dev, T as prevent_default, n as noop } from './client.7d936c3c.js';

/* src/routes/signin.svelte generated by Svelte v3.21.0 */

const file = "src/routes/signin.svelte";

function create_fragment(ctx) {
	let h2;
	let t0;
	let t1;
	let form;
	let input0;
	let t2;
	let input1;
	let t3;
	let button;
	let t4;
	let dispose;

	const block = {
		c: function create() {
			h2 = element("h2");
			t0 = text("Signin");
			t1 = space();
			form = element("form");
			input0 = element("input");
			t2 = space();
			input1 = element("input");
			t3 = space();
			button = element("button");
			t4 = text("Submit");
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Signin");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			form = claim_element(nodes, "FORM", {});
			var form_nodes = children(form);
			input0 = claim_element(form_nodes, "INPUT", { placeholder: true, class: true });
			t2 = claim_space(form_nodes);
			input1 = claim_element(form_nodes, "INPUT", { placeholder: true, class: true });
			t3 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", { type: true });
			var button_nodes = children(button);
			t4 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 44, 0, 1642);
			attr_dev(input0, "placeholder", "enter your e-mail");
			attr_dev(input0, "class", "svelte-1sfvs41");
			add_location(input0, file, 47, 4, 1710);
			attr_dev(input1, "placeholder", "enter your password");
			attr_dev(input1, "class", "svelte-1sfvs41");
			add_location(input1, file, 48, 4, 1773);
			attr_dev(button, "type", "submit");
			add_location(button, file, 49, 4, 1841);
			add_location(form, file, 46, 0, 1659);
		},
		m: function mount(target, anchor, remount) {
			insert_dev(target, h2, anchor);
			append_dev(h2, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, form, anchor);
			append_dev(form, input0);
			set_input_value(input0, /*email*/ ctx[0]);
			append_dev(form, t2);
			append_dev(form, input1);
			set_input_value(input1, /*password*/ ctx[1]);
			append_dev(form, t3);
			append_dev(form, button);
			append_dev(button, t4);
			if (remount) run_all(dispose);

			dispose = [
				listen_dev(input0, "input", /*input0_input_handler*/ ctx[6]),
				listen_dev(input1, "input", /*input1_input_handler*/ ctx[7]),
				listen_dev(form, "submit", prevent_default(/*handleSubmit*/ ctx[2]), false, true, false)
			];
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*email*/ 1 && input0.value !== /*email*/ ctx[0]) {
				set_input_value(input0, /*email*/ ctx[0]);
			}

			if (dirty & /*password*/ 2 && input1.value !== /*password*/ ctx[1]) {
				set_input_value(input1, /*password*/ ctx[1]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(form);
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function postData(url = "", data = {}) {
	// Default options are marked with *
	const response = await fetch(url, {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		mode: "cors", // no-cors, *cors, same-origin
		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
		credentials: "include", // include, *same-origin, omit
		headers: { "Content-Type": "application/json" }, // 'Content-Type': 'application/x-www-form-urlencoded',
		redirect: "follow", // manual, *follow, error
		referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data), // body data type must match "Content-Type" header
		
	});

	return response.json(); // parses JSON response into native JavaScript objects
}

function instance($$self, $$props, $$invalidate) {
	let email = "";
	let password = "";

	let questions = [
		{ id: 1, text: `Bevers` },
		{ id: 2, text: `Welpen Jongens` },
		{ id: 3, text: `Welpen Meisjes` },
		{ id: 4, text: `Scouts` },
		{ id: 5, text: `Explorers` },
		{ id: 6, text: `Roverscouts` },
		{ id: 7, text: `Pivos` }
	];

	let selected;
	let answer = "";

	function handleSubmit() {
		let url = "http://localhost:3000/api/auth/signin";
		let data = { email, password };
		postData(url, data);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Signin> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Signin", $$slots, []);

	function input0_input_handler() {
		email = this.value;
		$$invalidate(0, email);
	}

	function input1_input_handler() {
		password = this.value;
		$$invalidate(1, password);
	}

	$$self.$capture_state = () => ({
		email,
		password,
		questions,
		selected,
		answer,
		postData,
		handleSubmit
	});

	$$self.$inject_state = $$props => {
		if ("email" in $$props) $$invalidate(0, email = $$props.email);
		if ("password" in $$props) $$invalidate(1, password = $$props.password);
		if ("questions" in $$props) questions = $$props.questions;
		if ("selected" in $$props) selected = $$props.selected;
		if ("answer" in $$props) answer = $$props.answer;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		email,
		password,
		handleSubmit,
		questions,
		selected,
		answer,
		input0_input_handler,
		input1_input_handler
	];
}

class Signin extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Signin",
			options,
			id: create_fragment.name
		});
	}
}

export default Signin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmJmMmFjNzk1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3NpZ25pbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBsZXQgZW1haWwgPSAnJztcbiAgICBsZXQgcGFzc3dvcmQgPSAnJztcblxuICAgIGxldCBxdWVzdGlvbnMgPSBbXG4gICAgICAgIHsgaWQ6IDEsIHRleHQ6IGBCZXZlcnNgIH0sXG4gICAgICAgIHsgaWQ6IDIsIHRleHQ6IGBXZWxwZW4gSm9uZ2Vuc2AgfSxcbiAgICAgICAgeyBpZDogMywgdGV4dDogYFdlbHBlbiBNZWlzamVzYCB9LFxuICAgICAgICB7IGlkOiA0LCB0ZXh0OiBgU2NvdXRzYCB9LFxuICAgICAgICB7IGlkOiA1LCB0ZXh0OiBgRXhwbG9yZXJzYCB9LFxuICAgICAgICB7IGlkOiA2LCB0ZXh0OiBgUm92ZXJzY291dHNgIH0sXG4gICAgICAgIHsgaWQ6IDcsIHRleHQ6IGBQaXZvc2AgfSxcbiAgICBdO1xuXG4gICAgbGV0IHNlbGVjdGVkO1xuXG4gICAgbGV0IGFuc3dlciA9ICcnO1xuICAgIGFzeW5jIGZ1bmN0aW9uIHBvc3REYXRhKHVybCA9ICcnLCBkYXRhID0ge30pIHtcbiAgICAgICAgLy8gRGVmYXVsdCBvcHRpb25zIGFyZSBtYXJrZWQgd2l0aCAqXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXG4gICAgICAgICAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJywgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsIC8vIG1hbnVhbCwgKmZvbGxvdywgZXJyb3JcbiAgICAgICAgICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLCAvLyBuby1yZWZlcnJlciwgKm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlLCBvcmlnaW4sIG9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgc2FtZS1vcmlnaW4sIHN0cmljdC1vcmlnaW4sIHN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4sIHVuc2FmZS11cmxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7IC8vIHBhcnNlcyBKU09OIHJlc3BvbnNlIGludG8gbmF0aXZlIEphdmFTY3JpcHQgb2JqZWN0c1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdXRoL3NpZ25pbic7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgXCJlbWFpbFwiOiBlbWFpbCxcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogcGFzc3dvcmRcbiAgICAgICAgfTtcbiAgICAgICAgcG9zdERhdGEodXJsLCBkYXRhKTtcbiAgICB9XG48L3NjcmlwdD5cblxuPGgyPlNpZ25pbjwvaDI+XG5cbjxmb3JtIG9uOnN1Ym1pdHxwcmV2ZW50RGVmYXVsdD17aGFuZGxlU3VibWl0fT5cbiAgICA8aW5wdXQgYmluZDp2YWx1ZT17ZW1haWx9IHBsYWNlaG9sZGVyPVwiZW50ZXIgeW91ciBlLW1haWxcIj5cbiAgICA8aW5wdXQgYmluZDp2YWx1ZT17cGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwiZW50ZXIgeW91ciBwYXNzd29yZFwiPlxuICAgIDxidXR0b24gdHlwZT1zdWJtaXQ+XG4gICAgICAgIFN1Ym1pdFxuICAgIDwvYnV0dG9uPlxuPC9mb3JtPlxuXG48c3R5bGU+XG4gICAgaW5wdXQgeyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDUwMHB4OyBtYXgtd2lkdGg6IDEwMCU7IH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0ErQ3VCLEdBQUs7Ozt3Q0FDTCxHQUFROzs7Ozs7Ozs7Z0VBRkMsR0FBWTs7Ozt5REFDckIsR0FBSztzQ0FBTCxHQUFLOzs7K0RBQ0wsR0FBUTt5Q0FBUixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUEvQlosUUFBUSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsSUFBSTs7T0FFNUIsUUFBUSxTQUFTLEtBQUssQ0FBQyxHQUFHO0VBQzVCLE1BQU0sRUFBRSxNQUFNO0VBQ2QsSUFBSSxFQUFFLE1BQU07RUFDWixLQUFLLEVBQUUsVUFBVTtFQUNqQixXQUFXLEVBQUUsU0FBUztFQUN0QixPQUFPLElBQ0gsY0FBYyxFQUFFLGtCQUFrQjtFQUd0QyxRQUFRLEVBQUUsUUFBUTtFQUNsQixjQUFjLEVBQUUsYUFBYTtFQUM3QixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJOzs7O1FBRXRCLFFBQVEsQ0FBQyxJQUFJOzs7O0tBL0JwQixLQUFLLEdBQUcsRUFBRTtLQUNWLFFBQVEsR0FBRyxFQUFFOztLQUViLFNBQVM7SUFDUCxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUk7SUFDWCxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUk7SUFDWCxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUk7SUFDWCxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUk7SUFDWCxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUk7SUFDWCxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUk7SUFDWCxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUk7OztLQUdiLFFBQVE7S0FFUixNQUFNLEdBQUcsRUFBRTs7VUFrQk4sWUFBWTtNQUNiLEdBQUcsR0FBRyx1Q0FBdUM7TUFDN0MsSUFBSSxLQUNLLEtBQUssRUFDRixRQUFRO0VBRXhCLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSTs7Ozs7Ozs7Ozs7OztFQU9ILEtBQUs7Ozs7O0VBQ0wsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
