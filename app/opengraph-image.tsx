import { ImageResponse } from 'next/og';
import { geoCount, offerCount } from './offers';

export const alt = 'Fynzah — active payment offers, CIS & Worldwide';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display:'flex', width:'100%', height:'100%', padding:64, gap:48, background:'#fff', color:'#0f172a' }}>
      <div style={{ display:'flex', flexDirection:'column', justifyContent:'space-between', flex:1, minWidth:0 }}>
        <div style={{ display:'flex', color:'#ff56b6', fontSize:62, fontWeight:700, letterSpacing:-3 }}>fynzah.</div>
        <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
          <div style={{ display:'flex', flexDirection:'column', fontSize:78, lineHeight:1.04, fontWeight:700, letterSpacing:-4 }}>
            <div style={{ display:'flex' }}>Payment offers</div>
            <div style={{ display:'flex' }}>without borders.</div>
          </div>
          <div style={{ display:'flex', fontSize:30, color:'#575f6d' }}>CIS &amp; Worldwide</div>
        </div>
        <div style={{ display:'flex', color:'#ff56b6', fontSize:26 }}>{offerCount} offers · October 2026</div>
      </div>
      <div style={{ display:'flex', flexDirection:'column', width:350, flexShrink:0, padding:32, borderRadius:28, background:'#070707', color:'#fff', justifyContent:'space-between' }}>
        <div style={{ display:'flex', color:'#a7a7af', fontSize:16, letterSpacing:2 }}>ACTIVE OFFERS</div>
        <div style={{ display:'flex', alignItems:'baseline', gap:22 }}>
          <div style={{ display:'flex', fontSize:124, fontWeight:700, letterSpacing:-7 }}>{offerCount}</div>
          <div style={{ display:'flex', color:'#ff56b6', fontSize:22 }}>{geoCount} GEO</div>
        </div>
        <div style={{ display:'flex', alignItems:'flex-end', height:120, gap:12 }}>
          {[42,78,55,95,70,110,88].map((height, index) => <div key={index} style={{ width:30, height, borderRadius:6, background:index === 5 ? '#f5e642' : '#ff56b6' }} />)}
        </div>
        <div style={{ display:'flex', fontSize:22, color:'#fff' }}>@psp_assistant</div>
      </div>
    </div>,
    size,
  );
}
