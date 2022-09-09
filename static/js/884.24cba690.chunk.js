"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[884],{4959:function(e,r,t){t.d(r,{P:function(){return o}});var i=t(5218),n=t(2007),s=t.n(n),o=function(e){return i.Am.error(e)};Notification.ErrorToast={msg:s().string.isRequired}},2649:function(e,r,t){t.d(r,{F:function(){return d}});var i=t(9457),n=t(9918),s=t(2007),o=t.n(s),a=t(184),d=function(e){var r=e.poster_path,t=e.alt,s=e.width,o=e.children,d=n._p+s+r;return(0,a.jsx)(i.x,{children:r?(0,a.jsx)("img",{src:d,alt:t}):o})};Notification.ImageBox=o().shape({poster_path:o().string.isRequired,alt:o().string.isRequired,width:o().number.isRequired,children:o().element.isRequired})},3447:function(e,r,t){t.d(r,{D:function(){return i},w:function(){return n}});var i={getTrendingError:"Error: unable to load trending films",getMovieCreditsError:"Error: unable to load \u0441ast members details",getMovieRewiewsError:"Error: unable to load rewiews",getMovieDetailsError:"Error: unable to load movie details"},n={noCasts:"We don't have cast info about this movie",noReviews:"We don't have any reviews for this movie"}},884:function(e,r,t){t.r(r),t.d(r,{default:function(){return q}});var i=t(8185),n=t(9457),s=t(1413),o=t(6871),a=t(2649),d=t(2007),l=t.n(d),c=t(184),u="".concat(342,"px 1fr"),h=function(e){var r=e.title,t=e.overview,s=e.score,o=e.poster_path,d=e.genresString;return(0,c.jsxs)(n.x,{display:"grid",gridTemplateColumns:u,borderBottom:"1px solid black",children:[(0,c.jsx)(a.F,{poster_path:o,alt:r,width:342,children:(0,c.jsx)(i.aF,{size:342})}),(0,c.jsxs)(n.x,{display:"flex",flexDirection:"column",justifyContent:"flex-start",p:4,gridGap:10,children:[(0,c.jsx)("h2",{children:r}),(0,c.jsxs)("p",{children:["User score: ",s,"%"]}),(0,c.jsx)("p",{children:(0,c.jsx)("b",{children:"Overview:"})}),t,(0,c.jsx)("p",{children:(0,c.jsx)("b",{children:"Genres:"})}),d]})]})};Notification.MovieInfo=l().shape({title:l().string.isRequired,overview:l().string.isRequired,score:l().number.isRequired,poster_path:l().string.isRequired,genresString:l().string.isRequired});var x=t(2791),f=t(3504),p=t(9918),v=function(){var e=(0,o.TH)();return(0,c.jsx)(n.x,{as:"ul",pl:4,borderBottom:"1px solid black",children:p.eh.map((function(r){var t=r.href,i=r.text;return(0,c.jsx)(n.x,{as:"li",p:2,children:(0,c.jsx)(f.OL,{to:t,state:e.state,children:i})},t)}))})},g=t(1537),j=function(){return(0,c.jsxs)(n.x,{pt:4,pb:4,children:[(0,c.jsx)(n.x,{as:"p",mb:2,children:"Additional information"}),(0,c.jsx)(v,{}),(0,c.jsx)(x.Suspense,{fallback:(0,c.jsx)(g.a,{}),children:(0,c.jsx)(o.j3,{})})]})},m=t(4959),b=t(3447),w=t(1380),_=function(e){var r=e.title,t=e.overview,i=e.vote_average,n=e.poster_path,s=e.genres,o=Math.round(10*i),a=function(e){return e.reduce((function(e,r){return e+" "+r.name}),"")}(s);return{title:r,overview:t,score:o,poster_path:n,genresString:a}},R=function(){var e=(0,o.UO)().movieId,r=(0,w.A9)(e),t=r.data,i=r.error;if(!r.isLoading)return i?(m.P,void b.D.getMovieDetailsError):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(h,(0,s.Z)({},_(t))),(0,c.jsx)(j,{})]})},q=function(){var e=(0,o.TH)().state,r=e?e.pathname+e.search:"/";return(0,c.jsxs)(n.x,{as:"main",children:[(0,c.jsx)(n.x,{as:"button",type:"button",display:"flex",alignItems:"center",m:2,children:(0,c.jsxs)(f.rU,{to:r,children:[(0,c.jsx)(i.oqf,{}),"Go Back"]})}),(0,c.jsx)(R,{})]})}}}]);
//# sourceMappingURL=884.24cba690.chunk.js.map