function m(n,r){const a={},c={},o={$$scope:1};let i=n.length;for(;i--;){const s=n[i],e=r[i];if(e){for(const t in s)t in e||(c[t]=1);for(const t in e)o[t]||(a[t]=e[t],o[t]=1);n[i]=e}else for(const t in s)o[t]=1}for(const s in c)s in a||(a[s]=void 0);return a}const p="https://sveltekit-blog-template.vercel.app",u="Jordan",l="Doe",d=`${u} ${l}`,f="https://picsum.photos/id/203/250/250",g=`I’m ${u}, a software engineer based in Canada. Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Phasellus accumsan quam at eros malesuada, id luctus lectus efficitur. Nulla
sit amet arcu mi. Duis quis mauris malesuada, posuere orci et, pulvinar nisl. Nam malesuada
vehicula sapien vitae sagittis.
`,h="mattjennings/sveltekit-blog-template";export{f as a,g as b,m as c,h as g,d as n,p as w};
