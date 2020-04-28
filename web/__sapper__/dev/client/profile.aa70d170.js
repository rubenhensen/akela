import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, P as globals, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, k as add_location, l as insert_dev, m as append_dev, C as listen_dev, G as set_data_dev, n as noop } from './client.7d936c3c.js';

/* src/routes/profile.svelte generated by Svelte v3.21.0 */

const { console: console_1 } = globals;
const file = "src/routes/profile.svelte";

function create_fragment(ctx) {
	let h2;
	let t0;
	let t1;
	let button;
	let t2;
	let t3;
	let p0;
	let t4;
	let t5_value = /*profile*/ ctx[0].user.name + "";
	let t5;
	let t6;
	let p1;
	let t7;
	let t8_value = /*profile*/ ctx[0].user._id + "";
	let t8;
	let t9;
	let p2;
	let t10;
	let t11_value = /*profile*/ ctx[0].user.role + "";
	let t11;
	let t12;
	let p3;
	let t13;
	let t14_value = /*profile*/ ctx[0].user.email + "";
	let t14;
	let t15;
	let p4;
	let t16;
	let t17_value = /*profile*/ ctx[0].user.createdAt + "";
	let t17;
	let t18;
	let p5;
	let t19;
	let t20_value = /*profile*/ ctx[0].user.__v + "";
	let t20;
	let t21;
	let p6;
	let t22;
	let t23_value = /*profile*/ ctx[0].token + "";
	let t23;
	let dispose;

	const block = {
		c: function create() {
			h2 = element("h2");
			t0 = text("Profile");
			t1 = space();
			button = element("button");
			t2 = text("Get profile");
			t3 = space();
			p0 = element("p");
			t4 = text("name: ");
			t5 = text(t5_value);
			t6 = space();
			p1 = element("p");
			t7 = text("_id: ");
			t8 = text(t8_value);
			t9 = space();
			p2 = element("p");
			t10 = text("role: ");
			t11 = text(t11_value);
			t12 = space();
			p3 = element("p");
			t13 = text("email: ");
			t14 = text(t14_value);
			t15 = space();
			p4 = element("p");
			t16 = text("createdAt: ");
			t17 = text(t17_value);
			t18 = space();
			p5 = element("p");
			t19 = text("__v: ");
			t20 = text(t20_value);
			t21 = space();
			p6 = element("p");
			t22 = text("token: ");
			t23 = text(t23_value);
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Profile");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			button = claim_element(nodes, "BUTTON", {});
			var button_nodes = children(button);
			t2 = claim_text(button_nodes, "Get profile");
			button_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t4 = claim_text(p0_nodes, "name: ");
			t5 = claim_text(p0_nodes, t5_value);
			p0_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t7 = claim_text(p1_nodes, "_id: ");
			t8 = claim_text(p1_nodes, t8_value);
			p1_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			p2 = claim_element(nodes, "P", {});
			var p2_nodes = children(p2);
			t10 = claim_text(p2_nodes, "role: ");
			t11 = claim_text(p2_nodes, t11_value);
			p2_nodes.forEach(detach_dev);
			t12 = claim_space(nodes);
			p3 = claim_element(nodes, "P", {});
			var p3_nodes = children(p3);
			t13 = claim_text(p3_nodes, "email: ");
			t14 = claim_text(p3_nodes, t14_value);
			p3_nodes.forEach(detach_dev);
			t15 = claim_space(nodes);
			p4 = claim_element(nodes, "P", {});
			var p4_nodes = children(p4);
			t16 = claim_text(p4_nodes, "createdAt: ");
			t17 = claim_text(p4_nodes, t17_value);
			p4_nodes.forEach(detach_dev);
			t18 = claim_space(nodes);
			p5 = claim_element(nodes, "P", {});
			var p5_nodes = children(p5);
			t19 = claim_text(p5_nodes, "__v: ");
			t20 = claim_text(p5_nodes, t20_value);
			p5_nodes.forEach(detach_dev);
			t21 = claim_space(nodes);
			p6 = claim_element(nodes, "P", {});
			var p6_nodes = children(p6);
			t22 = claim_text(p6_nodes, "token: ");
			t23 = claim_text(p6_nodes, t23_value);
			p6_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 42, 0, 1523);
			add_location(button, file, 44, 4, 1545);
			add_location(p0, file, 50, 0, 1615);
			add_location(p1, file, 51, 0, 1648);
			add_location(p2, file, 52, 0, 1679);
			add_location(p3, file, 53, 0, 1712);
			add_location(p4, file, 54, 0, 1747);
			add_location(p5, file, 55, 0, 1790);
			add_location(p6, file, 56, 0, 1821);
		},
		m: function mount(target, anchor, remount) {
			insert_dev(target, h2, anchor);
			append_dev(h2, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, button, anchor);
			append_dev(button, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t4);
			append_dev(p0, t5);
			insert_dev(target, t6, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t7);
			append_dev(p1, t8);
			insert_dev(target, t9, anchor);
			insert_dev(target, p2, anchor);
			append_dev(p2, t10);
			append_dev(p2, t11);
			insert_dev(target, t12, anchor);
			insert_dev(target, p3, anchor);
			append_dev(p3, t13);
			append_dev(p3, t14);
			insert_dev(target, t15, anchor);
			insert_dev(target, p4, anchor);
			append_dev(p4, t16);
			append_dev(p4, t17);
			insert_dev(target, t18, anchor);
			insert_dev(target, p5, anchor);
			append_dev(p5, t19);
			append_dev(p5, t20);
			insert_dev(target, t21, anchor);
			insert_dev(target, p6, anchor);
			append_dev(p6, t22);
			append_dev(p6, t23);
			if (remount) dispose();
			dispose = listen_dev(button, "click", /*handleSubmit*/ ctx[1], false, false, false);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*profile*/ 1 && t5_value !== (t5_value = /*profile*/ ctx[0].user.name + "")) set_data_dev(t5, t5_value);
			if (dirty & /*profile*/ 1 && t8_value !== (t8_value = /*profile*/ ctx[0].user._id + "")) set_data_dev(t8, t8_value);
			if (dirty & /*profile*/ 1 && t11_value !== (t11_value = /*profile*/ ctx[0].user.role + "")) set_data_dev(t11, t11_value);
			if (dirty & /*profile*/ 1 && t14_value !== (t14_value = /*profile*/ ctx[0].user.email + "")) set_data_dev(t14, t14_value);
			if (dirty & /*profile*/ 1 && t17_value !== (t17_value = /*profile*/ ctx[0].user.createdAt + "")) set_data_dev(t17, t17_value);
			if (dirty & /*profile*/ 1 && t20_value !== (t20_value = /*profile*/ ctx[0].user.__v + "")) set_data_dev(t20, t20_value);
			if (dirty & /*profile*/ 1 && t23_value !== (t23_value = /*profile*/ ctx[0].token + "")) set_data_dev(t23, t23_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(button);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(p2);
			if (detaching) detach_dev(t12);
			if (detaching) detach_dev(p3);
			if (detaching) detach_dev(t15);
			if (detaching) detach_dev(p4);
			if (detaching) detach_dev(t18);
			if (detaching) detach_dev(p5);
			if (detaching) detach_dev(t21);
			if (detaching) detach_dev(p6);
			dispose();
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

async function getData(url = "") {
	// Default options are marked with *
	const response = await fetch(url, {
		method: "GET", // *GET, POST, PUT, DELETE, etc.
		mode: "cors", // no-cors, *cors, same-origin
		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
		credentials: "include", // include, *same-origin, omit
		// headers: {
		//     'Content-Type': 'application/json'
		// 'Content-Type': 'application/x-www-form-urlencoded',
		// },
		redirect: "follow", // manual, *follow, error
		referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		
	}); // body: JSON.stringify(data) // body data type must match "Content-Type" header

	return response.json(); // parses JSON response into native JavaScript objects
}

function log() {
	console.log("clicked");
}

function instance($$self, $$props, $$invalidate) {
	let profile = {
		"user": {
			"role": "",
			"_id": "",
			"name": "",
			"email": "",
			"createdAt": "",
			"updatedAt": "",
			"__v": null
		},
		"token": ""
	};

	function handleSubmit() {
		let url = "http://localhost:3000/api/users/me";
		getData(url).then(data => $$invalidate(0, profile = data));
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Profile> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Profile", $$slots, []);
	$$self.$capture_state = () => ({ profile, getData, handleSubmit, log });

	$$self.$inject_state = $$props => {
		if ("profile" in $$props) $$invalidate(0, profile = $$props.profile);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [profile, handleSubmit];
}

class Profile extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Profile",
			options,
			id: create_fragment.name
		});
	}
}

export default Profile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5hYTcwZDE3MC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9wcm9maWxlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGxldCBwcm9maWxlID0ge1xuICAgICAgICBcInVzZXJcIjoge1xuICAgICAgICAgICAgXCJyb2xlXCI6IFwiXCIsXG4gICAgICAgICAgICBcIl9pZFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiXCIsXG4gICAgICAgICAgICBcImNyZWF0ZWRBdFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVkQXRcIjogXCJcIixcbiAgICAgICAgICAgIFwiX192XCI6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b2tlblwiOiBcIlwiXG4gICAgfTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEodXJsID0gJycpIHtcbiAgICAgICAgLy8gRGVmYXVsdCBvcHRpb25zIGFyZSBtYXJrZWQgd2l0aCAqXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLCAvLyBuby1jb3JzLCAqY29ycywgc2FtZS1vcmlnaW5cbiAgICAgICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLCAvLyAqZGVmYXVsdCwgbm8tY2FjaGUsIHJlbG9hZCwgZm9yY2UtY2FjaGUsIG9ubHktaWYtY2FjaGVkXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLCAvLyBpbmNsdWRlLCAqc2FtZS1vcmlnaW4sIG9taXRcbiAgICAgICAgICAgIC8vIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIC8vICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JywgLy8gbWFudWFsLCAqZm9sbG93LCBlcnJvclxuICAgICAgICAgICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsIC8vIG5vLXJlZmVycmVyLCAqbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUsIG9yaWdpbiwgb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luLCBzYW1lLW9yaWdpbiwgc3RyaWN0LW9yaWdpbiwgc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgdW5zYWZlLXVybFxuICAgICAgICAgICAgLy8gYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSkgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlclxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgLy8gcGFyc2VzIEpTT04gcmVzcG9uc2UgaW50byBuYXRpdmUgSmF2YVNjcmlwdCBvYmplY3RzXG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICAgICAgbGV0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXJzL21lJztcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgZ2V0RGF0YSh1cmwpLnRoZW4oZGF0YSA9PiBwcm9maWxlID0gZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9nKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxoMj5Qcm9maWxlPC9oMj5cblxuICAgIDxidXR0b24gb246Y2xpY2s9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIEdldCBwcm9maWxlXG4gICAgPC9idXR0b24+XG5cblxuXG48cD5uYW1lOiB7cHJvZmlsZS51c2VyLm5hbWV9PC9wPlxuPHA+X2lkOiB7cHJvZmlsZS51c2VyLl9pZH08L3A+XG48cD5yb2xlOiB7cHJvZmlsZS51c2VyLnJvbGV9PC9wPlxuPHA+ZW1haWw6IHtwcm9maWxlLnVzZXIuZW1haWx9PC9wPlxuPHA+Y3JlYXRlZEF0OiB7cHJvZmlsZS51c2VyLmNyZWF0ZWRBdH08L3A+XG48cD5fX3Y6IHtwcm9maWxlLnVzZXIuX192fTwvcD5cbjxwPnRva2VuOiB7cHJvZmlsZS50b2tlbn08L3A+XG5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBa0RVLEdBQU8sSUFBQyxJQUFJLENBQUMsSUFBSTs7Ozs7NEJBQ2xCLEdBQU8sSUFBQyxJQUFJLENBQUMsR0FBRzs7Ozs7NkJBQ2YsR0FBTyxJQUFDLElBQUksQ0FBQyxJQUFJOzs7Ozs2QkFDaEIsR0FBTyxJQUFDLElBQUksQ0FBQyxLQUFLOzs7Ozs2QkFDZCxHQUFPLElBQUMsSUFBSSxDQUFDLFNBQVM7Ozs7OzZCQUM1QixHQUFPLElBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7OzZCQUNkLEdBQU8sSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBWkYsR0FBWTs7O3FFQU14QixHQUFPLElBQUMsSUFBSSxDQUFDLElBQUk7cUVBQ2xCLEdBQU8sSUFBQyxJQUFJLENBQUMsR0FBRzt1RUFDZixHQUFPLElBQUMsSUFBSSxDQUFDLElBQUk7dUVBQ2hCLEdBQU8sSUFBQyxJQUFJLENBQUMsS0FBSzt1RUFDZCxHQUFPLElBQUMsSUFBSSxDQUFDLFNBQVM7dUVBQzVCLEdBQU8sSUFBQyxJQUFJLENBQUMsR0FBRzt1RUFDZCxHQUFPLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQTFDTCxPQUFPLENBQUMsR0FBRyxHQUFHLEVBQUU7O09BRXJCLFFBQVEsU0FBUyxLQUFLLENBQUMsR0FBRztFQUM1QixNQUFNLEVBQUUsS0FBSztFQUNiLElBQUksRUFBRSxNQUFNO0VBQ1osS0FBSyxFQUFFLFVBQVU7RUFDakIsV0FBVyxFQUFFLFNBQVM7Ozs7O0VBS3RCLFFBQVEsRUFBRSxRQUFRO0VBQ2xCLGNBQWMsRUFBRSxhQUFhOzs7O1FBRzFCLFFBQVEsQ0FBQyxJQUFJOzs7U0FRZixHQUFHO0NBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTOzs7O0tBckNyQixPQUFPO0VBQ1AsTUFBTTtHQUNGLE1BQU0sRUFBRSxFQUFFO0dBQ1YsS0FBSyxFQUFFLEVBQUU7R0FDVCxNQUFNLEVBQUUsRUFBRTtHQUNWLE9BQU8sRUFBRSxFQUFFO0dBQ1gsV0FBVyxFQUFFLEVBQUU7R0FDZixXQUFXLEVBQUUsRUFBRTtHQUNmLEtBQUssRUFBRSxJQUFJOztFQUVmLE9BQU8sRUFBRSxFQUFFOzs7VUFvQk4sWUFBWTtNQUNiLEdBQUcsR0FBRyxvQ0FBb0M7RUFFOUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxvQkFBSSxPQUFPLEdBQUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
