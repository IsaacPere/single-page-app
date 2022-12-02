import AbstractView from './AbstractView.js';

export default class extends AbstractView{
	constructor(params){
		super(params);
		this.setTitle("Dashboard");
	}
	async getHtml(){
		return `
			<h1>Hello Isaac Pere</h1>
			<p>Manage your privacy and configurations</p>
		`;
	}
}