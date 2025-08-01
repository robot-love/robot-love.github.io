function f(i,u){const n={},a={},r={$$scope:1};let s=i.length;for(;s--;){const t=i[s],e=u[s];if(e){for(const o in t)o in e||(a[o]=1);for(const o in e)r[o]||(n[o]=e[o],r[o]=1);i[s]=e}else for(const o in t)r[o]=1}for(const t in a)t in n||(n[t]=void 0);return n}const p="https://robot-love.github.io",c="Sepehr",d=`${c}`,h="https://picsum.photos/id/203/250/250",b=`I’m ${c}, a software engineer from Guelph, Ontario, currently based in Seattle, WA.

Presently I work on core infra @ Meta. I did some graduate research in computer vision and
image processing. I like Rust.
`,g="robot-love/robot-love.github.io";export{h as a,b,f as c,g,d as n,p as w};
