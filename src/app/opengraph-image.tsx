import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aircom-fort.by';

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #7B1117 0%, #b91c1c 50%, #991b1b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Background circles */}
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 350, height: 350, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex' }} />

        {/* Logo icon */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${baseUrl}/assets/images/Image__1_-1777225844930.png`}
          width={110}
          height={110}
          style={{ marginBottom: 24, filter: 'brightness(0) invert(1)' }}
          alt="AirComfort"
        />

        {/* Brand name */}
        <div style={{ fontSize: 80, fontWeight: 800, color: 'white', letterSpacing: '-1px', marginBottom: 16, display: 'flex' }}>
          AirComfort
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 38, color: 'rgba(255,255,255,0.85)', fontWeight: 400, marginBottom: 44, display: 'flex' }}>
          Кондиционеры в Гомеле
        </div>

        {/* Divider */}
        <div style={{ width: 80, height: 3, background: 'rgba(255,255,255,0.4)', borderRadius: 2, marginBottom: 36, display: 'flex' }} />

        {/* Details */}
        <div style={{ display: 'flex', gap: 48, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 20, color: 'rgba(255,255,255,0.7)', display: 'flex' }}>Продажа</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: 'white', display: 'flex' }}>Electrolux, Ballu, Haier, LG</div>
          </div>
          <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.3)', display: 'flex' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 20, color: 'rgba(255,255,255,0.7)', display: 'flex' }}>Звоните</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: 'white', display: 'flex' }}>+375 29 105-06-94</div>
          </div>
          <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.3)', display: 'flex' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 20, color: 'rgba(255,255,255,0.7)', display: 'flex' }}>Сайт</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: 'white', display: 'flex' }}>aircom-fort.by</div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
