import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'ga.tech — Build, Automate & Launch'
export const size = { width: 1200, height: 600 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{
        width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',
        padding:'70px 80px',background:'linear-gradient(135deg,#fff8f0,#ffffff 50%,#f6f1ff)',
        color:'#111a33',fontFamily:'Arial, sans-serif'
      }}>
        <div style={{fontSize:52,fontWeight:800}}>ga<span style={{color:'#ff356a'}}>.</span>tech</div>
        <div style={{fontSize:68,fontWeight:800,lineHeight:1.02,letterSpacing:'-3px',marginTop:34,maxWidth:980}}>Build, automate and launch.</div>
        <div style={{fontSize:27,color:'#667085',marginTop:24}}>Founder-led digital product, AI automation, creative and cloud delivery.</div>
      </div>
    ),
    size
  )
}
