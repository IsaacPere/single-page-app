/* async function because
we are going to loading the dashboard, settings, posts*/

import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";
const navigate_to = url =>{
	history.pushState(null, null, url);
	router
}


const router = async () =>{
	const routes = [
		{path: "/", view: Dashboard },
		{path: "/posts", view: Posts},
		{path: "/settings", view:() => Settings },
	];
	const potential_matches = routes.map(
		route =>{
			return{
				route: route,
				isMatch: location.pathname === route.path
			};
		});
	let match = potential_matches.
	find(potential_matches => potential_matches.isMatch);
	if(!match){
		match = {
			route: routes[0],
			isMatch: true
		};
	}

	const view = new match.router.view();

	document.querySelector("#app").innerHTML = await view.getHtml();
	
	console.log(match.router.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () =>{
	document.body.addEventListener("click", e =>{
		if(e.target.matches("[data-link]")){
			e.preventDefault();
			navigate_to(e.target.href);
		}
	})
	router();
});