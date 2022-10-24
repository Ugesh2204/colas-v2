
//SwiperSlide per view 
export const SWIPERSLIDEPERVIEW = {
	 mobileSmallView:2,
	 mobileView:3,
	 tabletView:4,
	 laptopView:4,
	 desktopView:4,
	 desktopLargeView:8
}

// Media queries
export const BREAKPOINT_SIZES = {
	mobileSmall: 375,
	mobile: 540,
	tablet: 768,
	laptop: 1024,
	desktop: 1200,
	desktopLarge: 1366,
};

export const BREAKPOINTS = {
	mobileSmall: `(min-width: ${BREAKPOINT_SIZES.mobileSmall}px)`,
	mobile: `(min-width: ${BREAKPOINT_SIZES.mobile}px)`,
	tablet: `(min-width: ${BREAKPOINT_SIZES.tablet}px)`,
	laptop: `(min-width: ${BREAKPOINT_SIZES.laptop}px)`,
	desktop: `(min-width: ${BREAKPOINT_SIZES.desktop}px)`,
	desktopLarge: `(min-width: ${BREAKPOINT_SIZES.desktopLarge}px)`,
};