"use strict";(self.webpackChunksmall_wallet=self.webpackChunksmall_wallet||[]).push([[590],{1590:function(e,t,n){n.r(t),n.d(t,{TokensPage:function(){return k},default:function(){return v}});var l=n(7294),r=n(292),a=n(6174),o=n(2938),s=(0,o.Pi)((function(e){return l.createElement(a.Rr,null,l.createElement("span",null,"You have got"),e.store.splLoading?"...":l.createElement("span",null,e.number," SPL tokens"))})),u=(0,o.Pi)((function(e){return l.createElement(a.Rr,null,l.createElement("span",null,"You have got"),e.store.solLoading?"...":l.createElement("span",null,e.amount," SOL"))})),i=n(1003),c=n(9588),m=(0,o.Pi)((function(e){var t;return l.createElement(a.RN,null,l.createElement(i.S,{src:e.token.icon}),l.createElement("span",null,e.token.symbol),l.createElement("span",null,e.token.name),l.createElement(a.Wp,null,l.createElement("span",null,null===(t=e.amount)||void 0===t?void 0:t.toFixed(c.zo)),l.createElement("span",null,e.token.symbol)),l.createElement(a.tL,null,"~",e.amountUsd,"$"))})),p=n(4306),d=n(7207),g=n(677),f=g.ZP.div.withConfig({componentId:"sc-shj8jz-0"})(["align-items:self-start;display:grid;font-size:20px;grid-gap:24px;grid-template-columns:1fr 1fr;grid-template-rows:160px 1fr;height:100%;"]),E=g.ZP.div.withConfig({componentId:"sc-shj8jz-1"})(["align-self:stretch;display:grid;grid-column:1 / -1;grid-gap:8px;grid-template-rows:repeat(auto-fill,82px);justify-content:stretch;justify-items:",";overflow:scroll;"],(function(e){return e.isLoading?"center":"stretch"})),h=n(4222),k=(0,o.Pi)((function(){var e=(0,p.O)().publicKey,t=h.nC.resolve(d.G);return(0,l.useEffect)((function(){e&&t.loadWallet(e)}),[]),l.createElement(f,null,l.createElement(u,{amount:t.sol,store:t}),l.createElement(s,{number:t.splTokens.length,store:t}),l.createElement(E,{isLoading:t.isLoading},t.isLoading&&l.createElement(r.Z,null),t.splTokens.map((function(e){var n=t.amountMap.get(e.symbol),r=d.G.getUsdAmount(t.rates.get(e.symbol),n);return l.createElement(m,{token:e,key:e.symbol,amount:n,amountUsd:r})}))))})),v=k}}]);