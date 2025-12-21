import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

@customElement('app-dashboards')
export class AppHome extends LitElement {
  static styles = css`
  .iframe-container {
    width: 100%;
    max-width: 600px;
    height: 100%;
  }
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;
  render() {
    return html`
      <app-header></app-header>

      <main>
        <h1>Dashboards</h1>
        <p>This is the dashboards page.</p>
        <div class="iframes">
          <div class="iframe-container">
            <iframe src="http://localhost:3000/d-solo/ad9dtdx/new-dashboard?orgId=1&from=1765797747551&to=1765819347551&timezone=browser&panelId=panel-1&__feature.dashboardSceneSolo=true"></iframe>
          </div>
        </div>
      </main>
    `;
  }
}
