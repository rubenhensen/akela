import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, R as set_input_value, T as run_all, C as listen_dev, U as prevent_default, n as noop } from './client.22ea5f71.js';

/* src/routes/signup.svelte generated by Svelte v3.21.0 */

const file = "src/routes/signup.svelte";

function create_fragment(ctx) {
	let t0;
	let h2;
	let t1;
	let t2;
	let form;
	let input0;
	let t3;
	let input1;
	let t4;
	let input2;
	let t5;
	let button;
	let t6;
	let dispose;

	const block = {
		c: function create() {
			t0 = space();
			h2 = element("h2");
			t1 = text("Signup");
			t2 = space();
			form = element("form");
			input0 = element("input");
			t3 = space();
			input1 = element("input");
			t4 = space();
			input2 = element("input");
			t5 = space();
			button = element("button");
			t6 = text("Submit");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-8d9o5t\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Signup");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			form = claim_element(nodes, "FORM", {});
			var form_nodes = children(form);
			input0 = claim_element(form_nodes, "INPUT", { placeholder: true, class: true });
			t3 = claim_space(form_nodes);
			input1 = claim_element(form_nodes, "INPUT", { placeholder: true, class: true });
			t4 = claim_space(form_nodes);
			input2 = claim_element(form_nodes, "INPUT", { placeholder: true, class: true });
			t5 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", { type: true });
			var button_nodes = children(button);
			t6 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
			add_location(h2, file, 50, 0, 1764);
			attr_dev(input0, "placeholder", "enter your name");
			attr_dev(input0, "class", "svelte-1sfvs41");
			add_location(input0, file, 53, 4, 1832);
			attr_dev(input1, "placeholder", "enter your e-mail");
			attr_dev(input1, "class", "svelte-1sfvs41");
			add_location(input1, file, 54, 4, 1892);
			attr_dev(input2, "placeholder", "enter your password");
			attr_dev(input2, "class", "svelte-1sfvs41");
			add_location(input2, file, 55, 4, 1955);
			attr_dev(button, "type", "submit");
			add_location(button, file, 56, 4, 2023);
			add_location(form, file, 52, 0, 1781);
		},
		m: function mount(target, anchor, remount) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h2, anchor);
			append_dev(h2, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, form, anchor);
			append_dev(form, input0);
			set_input_value(input0, /*name*/ ctx[0]);
			append_dev(form, t3);
			append_dev(form, input1);
			set_input_value(input1, /*email*/ ctx[1]);
			append_dev(form, t4);
			append_dev(form, input2);
			set_input_value(input2, /*password*/ ctx[2]);
			append_dev(form, t5);
			append_dev(form, button);
			append_dev(button, t6);
			if (remount) run_all(dispose);

			dispose = [
				listen_dev(input0, "input", /*input0_input_handler*/ ctx[7]),
				listen_dev(input1, "input", /*input1_input_handler*/ ctx[8]),
				listen_dev(input2, "input", /*input2_input_handler*/ ctx[9]),
				listen_dev(form, "submit", prevent_default(/*handleSubmit*/ ctx[3]), false, true, false)
			];
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*name*/ 1 && input0.value !== /*name*/ ctx[0]) {
				set_input_value(input0, /*name*/ ctx[0]);
			}

			if (dirty & /*email*/ 2 && input1.value !== /*email*/ ctx[1]) {
				set_input_value(input1, /*email*/ ctx[1]);
			}

			if (dirty & /*password*/ 4 && input2.value !== /*password*/ ctx[2]) {
				set_input_value(input2, /*password*/ ctx[2]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t2);
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
		credentials: "same-origin", // include, *same-origin, omit
		headers: { "Content-Type": "application/json" }, // 'Content-Type': 'application/x-www-form-urlencoded',
		redirect: "follow", // manual, *follow, error
		referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data), // body data type must match "Content-Type" header
		
	});

	return response.json(); // parses JSON response into native JavaScript objects
}

function instance($$self, $$props, $$invalidate) {
	let name = "";
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
		let url = "http://localhost:3000/api/auth/signup";
		let data = { name, email, password };
		postData(url, data);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Signup> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Signup", $$slots, []);

	function input0_input_handler() {
		name = this.value;
		$$invalidate(0, name);
	}

	function input1_input_handler() {
		email = this.value;
		$$invalidate(1, email);
	}

	function input2_input_handler() {
		password = this.value;
		$$invalidate(2, password);
	}

	$$self.$capture_state = () => ({
		name,
		email,
		password,
		questions,
		selected,
		answer,
		postData,
		handleSubmit
	});

	$$self.$inject_state = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("email" in $$props) $$invalidate(1, email = $$props.email);
		if ("password" in $$props) $$invalidate(2, password = $$props.password);
		if ("questions" in $$props) questions = $$props.questions;
		if ("selected" in $$props) selected = $$props.selected;
		if ("answer" in $$props) answer = $$props.answer;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		name,
		email,
		password,
		handleSubmit,
		questions,
		selected,
		answer,
		input0_input_handler,
		input1_input_handler,
		input2_input_handler
	];
}

class Signup extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Signup",
			options,
			id: create_fragment.name
		});
	}
}

export default Signup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLjE3MTlmYjAzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3NpZ251cC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBsZXQgbmFtZSA9ICcnO1xuICAgIGxldCBlbWFpbCA9ICcnO1xuICAgIGxldCBwYXNzd29yZCA9ICcnO1xuXG4gICAgbGV0IHF1ZXN0aW9ucyA9IFtcbiAgICAgICAgeyBpZDogMSwgdGV4dDogYEJldmVyc2AgfSxcbiAgICAgICAgeyBpZDogMiwgdGV4dDogYFdlbHBlbiBKb25nZW5zYCB9LFxuICAgICAgICB7IGlkOiAzLCB0ZXh0OiBgV2VscGVuIE1laXNqZXNgIH0sXG4gICAgICAgIHsgaWQ6IDQsIHRleHQ6IGBTY291dHNgIH0sXG4gICAgICAgIHsgaWQ6IDUsIHRleHQ6IGBFeHBsb3JlcnNgIH0sXG4gICAgICAgIHsgaWQ6IDYsIHRleHQ6IGBSb3ZlcnNjb3V0c2AgfSxcbiAgICAgICAgeyBpZDogNywgdGV4dDogYFBpdm9zYCB9LFxuICAgIF07XG5cbiAgICBsZXQgc2VsZWN0ZWQ7XG5cbiAgICBsZXQgYW5zd2VyID0gJyc7XG4gICAgYXN5bmMgZnVuY3Rpb24gcG9zdERhdGEodXJsID0gJycsIGRhdGEgPSB7fSkge1xuICAgICAgICAvLyBEZWZhdWx0IG9wdGlvbnMgYXJlIG1hcmtlZCB3aXRoICpcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLCAvLyBuby1jb3JzLCAqY29ycywgc2FtZS1vcmlnaW5cbiAgICAgICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLCAvLyAqZGVmYXVsdCwgbm8tY2FjaGUsIHJlbG9hZCwgZm9yY2UtY2FjaGUsIG9ubHktaWYtY2FjaGVkXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsIC8vIG1hbnVhbCwgKmZvbGxvdywgZXJyb3JcbiAgICAgICAgICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLCAvLyBuby1yZWZlcnJlciwgKm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlLCBvcmlnaW4sIG9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgc2FtZS1vcmlnaW4sIHN0cmljdC1vcmlnaW4sIHN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4sIHVuc2FmZS11cmxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7IC8vIHBhcnNlcyBKU09OIHJlc3BvbnNlIGludG8gbmF0aXZlIEphdmFTY3JpcHQgb2JqZWN0c1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdXRoL3NpZ251cCc7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgXCJuYW1lXCI6IG5hbWUsXG4gICAgICAgICAgICBcImVtYWlsXCI6IGVtYWlsLFxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOiBwYXNzd29yZFxuICAgICAgICB9O1xuICAgICAgICBwb3N0RGF0YSh1cmwsIGRhdGEpO1xuICAgIH1cbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+XG4gICAgPHRpdGxlPlNhcHBlciBwcm9qZWN0IHRlbXBsYXRlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMj5TaWdudXA8L2gyPlxuXG48Zm9ybSBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgPGlucHV0IGJpbmQ6dmFsdWU9e25hbWV9IHBsYWNlaG9sZGVyPVwiZW50ZXIgeW91ciBuYW1lXCI+XG4gICAgPGlucHV0IGJpbmQ6dmFsdWU9e2VtYWlsfSBwbGFjZWhvbGRlcj1cImVudGVyIHlvdXIgZS1tYWlsXCI+XG4gICAgPGlucHV0IGJpbmQ6dmFsdWU9e3Bhc3N3b3JkfSBwbGFjZWhvbGRlcj1cImVudGVyIHlvdXIgcGFzc3dvcmRcIj5cbiAgICA8YnV0dG9uIHR5cGU9c3VibWl0PlxuICAgICAgICBTdWJtaXRcbiAgICA8L2J1dHRvbj5cbjwvZm9ybT5cblxuXG48c3R5bGU+XG4gICAgaW5wdXQgeyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDUwMHB4OyBtYXgtd2lkdGg6IDEwMCU7IH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBcUR1QixHQUFJOzs7cUNBQ0osR0FBSzs7O3dDQUNMLEdBQVE7Ozs7Ozs7Ozs7Z0VBSEMsR0FBWTs7Ozt1REFDckIsR0FBSTtxQ0FBSixHQUFJOzs7eURBQ0osR0FBSztzQ0FBTCxHQUFLOzs7K0RBQ0wsR0FBUTt5Q0FBUixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBckNaLFFBQVEsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLElBQUk7O09BRTVCLFFBQVEsU0FBUyxLQUFLLENBQUMsR0FBRztFQUM1QixNQUFNLEVBQUUsTUFBTTtFQUNkLElBQUksRUFBRSxNQUFNO0VBQ1osS0FBSyxFQUFFLFVBQVU7RUFDakIsV0FBVyxFQUFFLGFBQWE7RUFDMUIsT0FBTyxJQUNILGNBQWMsRUFBRSxrQkFBa0I7RUFHdEMsUUFBUSxFQUFFLFFBQVE7RUFDbEIsY0FBYyxFQUFFLGFBQWE7RUFDN0IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSTs7OztRQUV0QixRQUFRLENBQUMsSUFBSTs7OztLQWhDcEIsSUFBSSxHQUFHLEVBQUU7S0FDVCxLQUFLLEdBQUcsRUFBRTtLQUNWLFFBQVEsR0FBRyxFQUFFOztLQUViLFNBQVM7SUFDUCxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUk7SUFDWCxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUk7SUFDWCxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUk7SUFDWCxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUk7SUFDWCxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUk7SUFDWCxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUk7SUFDWCxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUk7OztLQUdiLFFBQVE7S0FFUixNQUFNLEdBQUcsRUFBRTs7VUFrQk4sWUFBWTtNQUNiLEdBQUcsR0FBRyx1Q0FBdUM7TUFDN0MsSUFBSSxLQUNJLElBQUksRUFDSCxLQUFLLEVBQ0YsUUFBUTtFQUV4QixRQUFRLENBQUMsR0FBRyxFQUFFLElBQUk7Ozs7Ozs7Ozs7Ozs7RUFXSCxJQUFJOzs7OztFQUNKLEtBQUs7Ozs7O0VBQ0wsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==