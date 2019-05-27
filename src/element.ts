import { LitElement, html, customElement, property } from 'lit-element';
// @ts-ignore
// No problem importing css, but VSC complains
import style from './element.scss';

const capFirstLetter = (s: string) => s.split('-').map(subS => subS[0].toUpperCase() + subS.slice(1)).join('-');

@customElement('my-element')
class MyElement extends LitElement {

    @property({ type: String })
    name = 'Gerry';

    fetchName = () => fetch('https://randomuser.me/api?inc=name&nat=us,de,gb', {
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8080',
            Accept: 'application/json',
        }
    })
        .then(res => res.json())
        .then(json => {
            const { first, last } = json.results[0].name;
            return capFirstLetter(first) + ' ' + capFirstLetter(last);
        });

    buttonClick = () => this.fetchName().then(name => {
        this.name = name;
    });


    render() {
        return html`
            <!-- It's better to use style tags -->
            <!--link rel="stylesheet" href="src<<</main.css"-->
            <style>${style}</style>
            <h1>Hello, ${this.name}</h1>
            <button @click="${this.buttonClick}">Load name</button>
        `;
    }
}

export default MyElement;