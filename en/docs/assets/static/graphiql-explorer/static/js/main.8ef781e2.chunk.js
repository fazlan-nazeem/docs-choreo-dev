(this["webpackJsonpchoreo-graphiql-explorer"]=this["webpackJsonpchoreo-graphiql-explorer"]||[]).push([[0],{193:function(e,t,a){},194:function(e,t,a){},272:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(26),o=a.n(i),c=(a(193),a(51)),l=a(52),s=a(83),h=a(185),u=a(183),d=(a(194),a(195),a(186)),p=a(317),f=a(316),j=a(322),b=a(321),g=a(43),T=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={authToken:""},n.updateAuthToken=n.updateAuthToken.bind(Object(s.a)(n)),n.graphQLFetcher=n.graphQLFetcher.bind(Object(s.a)(n)),n}return Object(l.a)(a,[{key:"getAuthToken",value:function(){return this.state.authToken}},{key:"updateAuthToken",value:function(e){this.setState({authToken:e.target.value})}},{key:"graphQLFetcher",value:function(e){var t=this.getAuthToken();return fetch("https://analytics-api.choreo.dev/query-api",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t},body:JSON.stringify(e),credentials:"same-origin"}).then((function(e){return e.json()}))}},{key:"render",value:function(){var e=JSON.stringify({filter:{from:"2021-08-23T10:00:00.000+05:30",to:"2021-08-24T10:10:00.000+05:30"},latencySummaryFilter:{granularity:"1d"},granularity:"1d",dataFilter:{orgId:"12345678-1234-4321-1234-123456789012",environmentId:"user-1",tenant:"carbon.super"}}),t=this.state.authToken;return Object(g.jsxs)(f.a,{children:[Object(g.jsx)(p.a,{container:!0,spacing:1,children:Object(g.jsxs)(p.a,{item:!0,xs:12,className:"Token",children:[Object(g.jsx)(p.a,{item:!0,xs:4,className:"TokenLabel",children:Object(g.jsx)(b.a,{variant:"h6",gutterBottom:!0,children:"Authentication Token:"})}),Object(g.jsx)(p.a,{item:!0,xs:7,children:Object(g.jsx)(j.a,{fullWidth:!0,size:"small",variant:"outlined",placeholder:"Please paste the authentication token here",onChange:this.updateAuthToken,value:t})})]})}),Object(g.jsx)(d.a,{fetcher:this.graphQLFetcher,defaultQuery:"\n        query(\n            $dataFilter: DataFilter!,\n            $filter: TimeFilter!\n            ) {\n                getTotalTraffic(filter: $filter, dataFilter: $dataFilter)\n                getOverallLatency(filter: $filter, dataFilter: $dataFilter)\n                getTotalErrors(filter: $filter, dataFilter: $dataFilter)\n            }\n        ",variables:e})]})}}]),a}(r.a.Component);o.a.render(Object(g.jsx)(T,{}),document.getElementById("root"))}},[[272,1,2]]]);
//# sourceMappingURL=main.8ef781e2.chunk.js.map