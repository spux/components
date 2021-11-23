import { html } from 'https://unpkg.com/spux?module'

export default function Footer(props) {
  return html`
    <footer>
      ${props.text} ${props.genesis ? ` | Genesis | 
      <i><a href="https://gitmark.info/${props.genesis}">${props.genesis}</a></i> | <a href="https://git-mark.com/">Gitmark</a>` : ''}
    </footer>`
}
