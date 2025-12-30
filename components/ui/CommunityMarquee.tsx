import React from 'react'

const CommunityMarquee = () => {
  // Data strictly extracted from the original HTML structure
  // 'type': 'img' (individual image), 'stat' (text card), 'group' (horizontal row of images)
  const contentColumns = [
    {
      items: [
        {
          type: 'img',
          src: 'https://hive.io/images/community/hivefest9_1.webp',
          credit: 'crimsonclad',
          w: 350,
          h: 263,
        },
        {
          type: 'img',
          src: 'https://hive.io/images/community/hivefest_mexico2.webp',
          credit: 'louis88',
          w: 350,
          h: 263,
        },
      ],
    },
    {
      items: [
        {
          type: 'img',
          src: 'https://hive.io/images/community/hivefest_mexico3.png',
          credit: 'bil.prag',
          w: 716,
          h: 542,
        },
      ],
    },
    {
      items: [
        {
          type: 'img',
          src: 'https://hive.io/images/community/hivefest10_1.png',
          credit: 'manuphotos',
          w: 350,
          h: 263,
        },
        { type: 'stat', value: '1,200', label: 'Participants over 10 HiveFests', w: 350, h: 263 },
      ],
    },
    {
      items: [
        {
          type: 'img',
          src: 'https://hive.io/images/community/hive_car1.jpeg',
          credit: 'louis88',
          w: 350,
          h: 542,
        },
      ],
    },
    {
      items: [
        {
          type: 'img',
          src: 'https://hive.io/images/community/hivefest10_3.jpeg',
          credit: 'rubencress',
          w: 350,
          h: 263,
        },
        {
          type: 'img',
          src: 'https://hive.io/images/community/hivefest_mexico2.webp',
          credit: 'louis88',
          w: 350,
          h: 263,
        },
      ],
    },
    {
      items: [
        {
          type: 'img',
          src: 'https://hive.io/images/community/hivefest_mexico2.webp',
          credit: 'manuphotos',
          w: 716,
          h: 542,
        },
      ],
    },
    {
      items: [
        { type: 'stat', value: '10', label: 'Years of Hive Events', w: 350, h: 263 },
        {
          type: 'img',
          src: 'https://hive.io/images/community/hivefest7_2.jpeg',
          credit: 'rubencress',
          w: 350,
          h: 263,
        },
      ],
    },
    {
      items: [
        {
          type: 'img',
          src: 'https://hive.io/images/community/african_community.webp',
          credit: 'hivecreators',
          w: 716,
          h: 263,
        },
        // Special horizontal grouping for the bottom of this column
        {
          type: 'group',
          gap: 4,
          children: [
            {
              type: 'img',
              src: 'https://hive.io/images/community/blockchainsummit_1.png',
              credit: 'hivecreators',
              w: 350,
              h: 263,
            },
            {
              type: 'img',
              src: 'https://hive.io/images/community/latinevent_1.jpeg',
              credit: 'hivecreators',
              w: 350,
              h: 263,
            },
          ],
        },
      ],
    },
    {
      items: [
        {
          type: 'img',
          src: 'https://hive.io/images/community/hivefest6_2.jpeg',
          credit: 'celestal',
          w: 350,
          h: 542,
        },
      ],
    },
  ]

  // Helper to render individual blocks
  const RenderBlock = ({ item, index }) => {
    const commonClasses =
      'shrink-0 rounded-2xl relative overflow-hidden bg-[#1F1F1F] border border-gray-800'

    if (item.type === 'img') {
      return (
        <div
          className={commonClasses}
          style={{ width: item.w, height: item.h, minWidth: item.w, minHeight: item.h }}
        >
          <img
            alt="Hive community"
            width={item.w}
            height={item.h}
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            loading="eager"
            src={item.src}
          />
          <span className="absolute bottom-2 right-2 text-[10px] text-white/60 pointer-events-none mix-blend-difference">
            © {item.credit}
          </span>
        </div>
      )
    }

    if (item.type === 'stat') {
      return (
        <div
          className={`${commonClasses} flex flex-col items-center justify-center text-center p-6 group hover:border-[#DC2626] transition-colors duration-300`}
          style={{ width: item.w, height: item.h, minWidth: item.w, minHeight: item.h }}
        >
          <span className="font-bold text-[#DC2626] text-6xl md:text-8xl z-10 drop-shadow-lg">
            {item.value}
          </span>
          <span className="text-gray-400 text-sm md:text-base mt-3 z-10 font-medium">
            {item.label}
          </span>
        </div>
      )
    }

    if (item.type === 'group') {
      return (
        <div className="flex gap-4 w-full">
          {item.children.map((child, childIndex) => (
            <RenderBlock key={`${index}-${childIndex}`} item={child} />
          ))}
        </div>
      )
    }

    return null
  }

  return (
    <div className="w-full bg-gradient-to-b from-[#050505] to-[#0A0A0A] py-12 sm:py-24 font-sans antialiased overflow-hidden select-none">
      {/* CSS Animation for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee 80s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div className="max-w-screen-2xl mx-auto mb-8 sm:mb-16 px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center">
          Join a Thriving Community<span className="text-[#DC2626]">.</span>
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative overflow-hidden max-h-[280px] sm:max-h-none py-4">
        {/* Scale Wrapper to match responsive logic */}
        <div className="flex origin-top-left scale-[0.5] sm:scale-100">
          <div className="marquee-track">
            {/* First Set of Columns */}
            <div className="flex gap-4 shrink-0 pr-4">
              {contentColumns.map((col, idx) => (
                <div key={idx} className="shrink-0 flex flex-col gap-4">
                  {col.items.map((item, itemIdx) => (
                    <RenderBlock key={itemIdx} item={item} index={itemIdx} />
                  ))}
                </div>
              ))}
            </div>

            {/* Duplicate Set for Seamless Loop */}
            <div className="flex gap-4 shrink-0 pr-4">
              {contentColumns.map((col, idx) => (
                <div key={`dup-${idx}`} className="shrink-0 flex flex-col gap-4">
                  {col.items.map((item, itemIdx) => (
                    <RenderBlock key={`dup-${itemIdx}`} item={item} index={itemIdx} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityMarquee
