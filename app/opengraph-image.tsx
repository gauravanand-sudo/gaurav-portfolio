import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'ga.tech — Build, Automate & Launch'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{
        width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between', padding: '72px 78px',
        background: 'linear-gradient(135deg,#fff8f0 0%,#ffffff 46%,#f6f1ff 100%)',
        color: '#111a33', fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{display:'flex',alignItems:'center',gap:18}}>
          <div style={{display:'flex',fontSize:54,fontWeight:800}}>ga<span style={{color:'#ff356a'}}>.</span>tech</div>
          <div style={{fontSize:18,color:'#667085',paddingTop:10}}>DIGITAL PRODUCT STUDIO</div>
        </div>
        <div style={{display:'flex',flexDirection:'column',maxWidth:980}}>
          <div style={{fontSize:72,fontWeight:800,lineHeight:1.02,letterSpacing:'-3px'}}>
            Build, automate and launch without juggling multiple vendors.
          </div>
          <div style={{fontSize:28,color:'#667085',marginTop:28,lineHeight:1.4}}>
            Product · AI automation · Creative · Cloud
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',fontSize:20,color:'#667085'}}>
          <span>Founder-led delivery</span><span>gauravanand.tech</span>
        </div>
      </div>
    ),
    size
  )
}
