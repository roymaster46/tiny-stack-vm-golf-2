import g from"node:fs";
const A=process.env.MAKEFUN_INPUT_DIR??"/input",B=process.env.MAKEFUN_OUTPUT_DIR??"/output",H="0Aq46:;?xxxxxxxx999999959995999x999xxxxxxxxxxxxxPTTP0xxxxxxxxxxx58xxxxxxxxxxxxxx4414";
function R(P,N){
 let D=new Int32Array(256),M=new Int32Array(256),K=new Int32Array(64),d=0,k=0,p=0,n=0,o="",j=0,a,b,z,w,f=e=>({o,e});
 for(;;){
  if(n>=1e6)return f(10);
  if(p<0||p>=P.length)return f(9);
  let q=P[p],c=H.charCodeAt(q)-48;
  if(!(c>=0&&c<=65))return f(5);
  let m=c>>4,u=c>>2&3,v=c&3,y=P[p+1]|P[p+2]<<8,s=y>32767?y-65536:y;
  if(p+m>=P.length)return f(9);
  n++;
  if(d<u||d-u+v>256)return f(d<u?2:3);
  let x=p+m+1;
  if(q>15&&q<35&&q!=23&&q!=27){
   b=D[--d];a=D[--d];z=q-16;u=a>>>0;w=b>>>0;
   if(z>2&&z<7&&!b)return f(4);
   D[d++]=!z?a+b:z==1?a-b:z==2?Math.imul(a,b):z==3?(a/b)|0:z==4?(a%b)|0:z==5?u/w|0:z==6?u%w|0:z==8?a&b:z==9?a|b:z==10?a^b:z==12?a<<(b&31):z==13?a>>(b&31):z==14?(a>>>(b&31))|0:z==16?a==b?1:0:z==17?a<b?1:0:u<w?1:0;
  }else switch(q){
   case 0:return f(0);
   case 1:D[d++]=y<<24>>24;break;
   case 2:D[d++]=y|P[p+3]<<16|P[p+4]<<24;break;
   case 3:d--;break;
   case 4:case 6:D[d]=D[d-1-(q>5)];d++;break;
   case 5:a=D[d-1];D[d-1]=D[d-2];D[d-2]=a;break;
   case 7:a=D[d-3];D[d-3]=D[d-2];D[d-2]=D[d-1];D[d-1]=a;break;
   case 23:case 27:D[d-1]=q==23?-D[d-1]:~D[d-1];break;
   case 48:p=x+s;continue;
   case 49:case 50:a=D[--d];if((q==49)==!a){p=x+s;continue;}break;
   case 51:if(k>=64)return f(7);K[k++]=x;p=y;continue;
   case 52:if(!k)return f(8);p=K[--k];continue;
   case 64:case 65:a=D[--d];if(a<0||a>255)return f(6);if(q==64)D[d++]=M[a];else M[a]=D[--d];break;
   case 80:case 81:a=D[--d];a=q==80?String(a):String.fromCharCode(a);if(o.length+a.length>65536)return f(11);o+=a;break;
   case 82:D[d++]=j<N.length?N[j++]:-1;break;
   case 83:return f(D[--d]&255);
  }
  p=x;
 }
}
for(let i of g.readdirSync(A).sort()){
 let r=R(g.readFileSync(A+"/"+i+"/program.bin"),g.readFileSync(A+"/"+i+"/input.bin"));
 g.mkdirSync(B+"/"+i,{recursive:!0});
 g.writeFileSync(B+"/"+i+"/stdout.bin",r.o,"latin1");
 g.writeFileSync(B+"/"+i+"/exit.txt",r.e+"\n");
}
