import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setColors } from "../actions/ColorsActions";
import sentimentToColor from "../utils/sentimentToColor";
import styled from "styled-components";

const OuterContainer = styled.div`
  width: 200%;
  height: 100%;
  position: absolute;
  left: -50%;
`;

const InnerContainer = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 auto;
  min-width: 1100px;
`;

const Svg = styled.svg`
  & g,
  & polygon,
  & path,
  & polyline,
  & rect,
  & circle {
    transition: fill 10s, stroke 10s, opacity 0.5s;
  }
`;

class Illustration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastUpdatedSection: -1,
      opacity: {
        walls: 1,
        rug: 1,
        window: 1,
        dresser: 1,
        table: 1,
        decorations: 1,
        bed: 1
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    const { results, setColors } = nextProps;
    const { lastUpdatedSection } = this.state;
    const sectionIndex = results.length - 1;
    if (sectionIndex > lastUpdatedSection) {
      setColors(sectionIndex, sentimentToColor(results[sectionIndex].data));
      this.setState({ lastUpdatedSection: lastUpdatedSection + 1 });
    }
  }

  onHover = section => {
    return () => {
      const { showHover } = this.props;
      const { opacity } = this.state;
      if (!showHover) {
        return null;
      }
      this.setState({ opacity: { ...opacity, [section]: 0.3 } });
    };
  };

  onLeave = section => {
    return () => {
      const { showHover } = this.props;
      const { opacity } = this.state;
      if (!showHover) {
        return null;
      }
      this.setState({ opacity: { ...opacity, [section]: 1 } });
    };
  };

  onClick = section => {
    return () => {
      const { showHover, onClickObject } = this.props;
      if (!showHover) {
        return null;
      }
      onClickObject(section);
    };
  };

  render() {
    const { colors } = this.props;
    const { opacity } = this.state;
    return (
      <OuterContainer>
        <InnerContainer>
          <Svg
            width="100%"
            preserveAspectRatio="none"
            height="100%"
            viewBox="0 0 1368 730"
            version="1.1"
          >
            <title>scene</title>
            <desc>Created with Sketch.</desc>
            <defs />
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="scene">
                <polygon
                  id="floor"
                  style={{ fill: colors.walls.floor, opacity: opacity.walls }}
                  fillRule="nonzero"
                  points="183.290662 425.264679 1187.08422 425.264679 1368 628.476054 1368 729 2 729 2 628.476054"
                  onMouseOver={this.onHover("walls")}
                  onMouseLeave={this.onLeave("walls")}
                  onClick={this.onClick(0)}
                />
                <path
                  d="M420.197841,507 L952.80488,507 C987.064165,507 1016.28957,531.796095 1021.87,565.597833 L1023.75242,577 C1029.16759,609.800758 1006.96719,640.780894 974.166431,646.196069 C970.925494,646.731125 967.646197,647 964.361389,647 L401.830064,647 C370.995971,647 346,622.004029 346,591.169936 C346,586.387823 346.614406,581.625525 347.828129,577 L352.489958,559.233667 C360.565378,528.458066 388.380393,507 420.197841,507 Z"
                  id="rug-shadow"
                  style={{ fill: colors.rug.shadow, opacity: opacity.rug }}
                  fillRule="nonzero"
                  onMouseOver={this.onHover("rug")}
                  onMouseLeave={this.onLeave("rug")}
                  onClick={this.onClick(1)}
                />
                <path
                  d="M419.796608,507 L953.08862,507 C987.222905,507 1016.38004,531.619989 1022.09911,565.271758 L1023.75242,575 C1029.14172,606.711366 1007.80347,636.787402 976.092108,642.176706 C972.868255,642.724595 969.603986,643 966.333909,643 L399.897382,643 C370.109713,643 345.962036,618.852323 345.962036,589.064654 C345.962036,584.314718 346.589494,579.585594 347.828129,575 L352.218518,558.746187 C360.466599,528.210672 388.166741,507 419.796608,507 Z"
                  id="rug"
                  style={{ fill: colors.rug.rug, opacity: opacity.rug }}
                  fillRule="nonzero"
                  onMouseOver={this.onHover("rug")}
                  onMouseLeave={this.onLeave("rug")}
                  onClick={this.onClick(1)}
                />
                <polygon
                  id="wall-right"
                  style={{
                    fill: colors.walls.wallSide,
                    opacity: opacity.walls
                  }}
                  fillRule="nonzero"
                  transform="translate(1276.775629, 315.199598) scale(-1, 1) translate(-1276.775629, -315.199598) "
                  points="1367.55125 425.47613 1186 629.399196 1186 1 1367.55125 2.16373589"
                  onMouseOver={this.onHover("walls")}
                  onMouseLeave={this.onLeave("walls")}
                  onClick={this.onClick(0)}
                />
                <g
                  id="lampShadow"
                  transform="translate(1204.000000, 330.000000)"
                  onMouseOver={this.onHover("table")}
                  onMouseLeave={this.onLeave("table")}
                  onClick={this.onClick(4)}
                  style={{
                    fill: colors.table.lampShadow,
                    opacity: opacity.table
                  }}
                  fillRule="nonzero"
                >
                  <rect
                    id="lampShadow-bottom"
                    x="36"
                    y="49"
                    width="10"
                    height="48"
                  />
                  <path
                    d="M15.356369,0 L56.4136315,-2.44249065e-15 C57.3153112,-5.81153634e-15 58.1054935,0.60335066 58.3430015,1.47318755 L70.6302042,46.4731875 C70.9211547,47.5387492 70.2932082,48.6384195 69.2276466,48.92937 C69.055967,48.976247 68.8787986,49 68.7008342,49 L2,49 C0.8954305,49 4.98490138e-14,48.1045695 4.97379915e-14,47 C4.97379915e-14,46.8073151 0.0278448635,46.6156413 0.0826713277,46.4309211 L13.4390403,1.43092113 C13.6909673,0.582133927 14.4709838,1.05082104e-15 15.356369,0 Z"
                    id="lampShadow-top"
                  />
                </g>
                <g
                  id="floorLight"
                  transform="translate(403.000000, 551.000000)"
                  fillRule="nonzero"
                  onMouseOver={this.onHover("window")}
                  onMouseLeave={this.onLeave("window")}
                  onClick={this.onClick(2)}
                  style={{ opacity: opacity.window }}
                >
                  <polygon
                    id="floorLight-top-left"
                    style={{
                      fill: colors.window.shadowDark
                    }}
                    points="55.0825441 3 261 3 261 98.1212185 21.4763379 96.726664 21.7488314 95.9666879"
                  />
                  <polygon
                    id="floorLight-bottom-left"
                    style={{
                      fill: colors.window.windowGlareShadowLight
                    }}
                    points="14.1195914 129 261 129 261 177.787084 0.173956816 177.787084"
                  />
                  <polygon
                    id="floorLight-top-right"
                    style={{
                      fill: colors.window.shadowDark
                    }}
                    points="281 3 486.798033 3 513.420008 96.0003941 281 96.5262136"
                  />
                  <polygon
                    id="floorLight-top-left-glare"
                    style={{
                      fill: colors.window.windowGlareShadowLight
                    }}
                    points="261 96.652437 261 112 13 112 18.5433951 96.726664 18.8192253 95.9666879"
                  />
                  <polygon
                    id="floorLight-top-right-glare"
                    style={{
                      fill: colors.window.windowGlareShadowLight
                    }}
                    points="516.380195 95.031355 521 111 281.476338 111 281.476338 96.3830028"
                  />
                  <polygon
                    id="floorLight-bottom-right"
                    style={{
                      fill: colors.window.shadowDark
                    }}
                    points="281 129 522.657185 129 536.160151 178.279899 281 178.279899"
                  />
                </g>
                <polyline
                  id="wall-back"
                  style={{
                    fill: colors.walls.wallBack,
                    opacity: opacity.walls
                  }}
                  fillRule="nonzero"
                  points="1187 2 1187 426 182 426 182 2 182 2"
                  onMouseOver={this.onHover("walls")}
                  onMouseLeave={this.onLeave("walls")}
                  onClick={this.onClick(0)}
                />
                <polygon
                  id="wall-left"
                  style={{
                    fill: colors.walls.wallSide,
                    opacity: opacity.walls
                  }}
                  fillRule="nonzero"
                  points="182.225907 427.339417 0.67465303 632.236289 0.67465303 0.83626411 182.225907 2.00555725"
                  onMouseOver={this.onHover("walls")}
                  onMouseLeave={this.onLeave("walls")}
                  onClick={this.onClick(0)}
                />
                <g
                  id="window"
                  transform="translate(494.000000, 2.000000)"
                  fillRule="nonzero"
                  onMouseOver={this.onHover("window")}
                  onMouseLeave={this.onLeave("window")}
                  onClick={this.onClick(2)}
                  style={{ opacity: opacity.window }}
                >
                  <rect
                    id="window-frame"
                    style={{
                      fill: colors.window.windowFrame
                    }}
                    x="0"
                    y="0"
                    width="382"
                    height="275"
                    rx="6"
                  />
                  <g
                    id="window-panes"
                    transform="translate(19.000000, 15.000000)"
                  >
                    <path
                      d="M3,0 L164,0 L164,113 L0,113 L0,3 C-2.02906125e-16,1.34314575 1.34314575,3.04359188e-16 3,0 Z"
                      id="window-glare-top-right"
                      style={{
                        fill: colors.window.windowGlareShadowLight
                      }}
                    />
                    <path
                      d="M0,128 L164,128 L164,241 L3,241 C1.34314575,241 2.02906125e-16,239.656854 0,238 L0,128 Z"
                      id="window-pane-bottom-left"
                      style={{
                        fill: colors.window.windowPane
                      }}
                    />
                    <path
                      d="M1,128 L165,128 L5.70214271,237.760109 C4.33779701,238.700176 2.46970105,238.356231 1.52963359,236.991885 C1.18470066,236.491275 1,235.897681 1,235.289743 L1,128 Z"
                      id="window-glare-bottom-left"
                      style={{
                        fill: colors.window.windowGlareShadowLight
                      }}
                    />
                    <path
                      d="M181,0 L342,0 C343.656854,-3.04359188e-16 345,1.34314575 345,3 L345,113 L181,113 L181,0 Z"
                      id="window-pane-top-right"
                      style={{
                        fill: colors.window.windowPane
                      }}
                    />
                    <path
                      d="M181,0 L335.358564,7.54951657e-14 C337.015419,4.42875805e-14 338.358564,1.34314575 338.358564,3 C338.358564,3.98679266 337.873287,4.9104791 337.060707,5.47036641 L181,113 L181,0 Z"
                      id="window-glare-top-right"
                      style={{
                        fill: colors.window.windowGlareShadowLight
                      }}
                    />
                    <path
                      d="M181,128 L345,128 L345,238 C345,239.656854 343.656854,241 342,241 L181,241 L181,128 Z"
                      id="window-pane-bottom-right"
                      style={{
                        fill: colors.window.windowPane
                      }}
                    />
                  </g>
                </g>
                <g
                  id="bed"
                  transform="translate(532.000000, 247.000000)"
                  onMouseOver={this.onHover("bed")}
                  onMouseLeave={this.onLeave("bed")}
                  onClick={this.onClick(6)}
                  style={{ opacity: opacity.bed }}
                >
                  <path
                    d="M32.8915623,180 L636.715861,180 C640.734805,180 644.527792,181.858831 646.990132,185.035118 L718.310922,277.035118 C722.709805,282.709441 721.675857,290.875388 716.001533,295.274271 C713.722386,297.041125 710.920447,298 708.036651,298 L13.9963597,298 C6.81665794,298 0.996359691,292.179702 0.996359691,285 C0.996359691,284.121464 1.08541593,283.24519 1.26216274,282.384617 L20.1573653,190.384617 C21.3989876,184.339207 26.7199652,180 32.8915623,180 Z"
                    id="bed-shadow"
                    style={{
                      fill: colors.bed.bedShadowDark
                    }}
                    fillRule="nonzero"
                  />
                  <g
                    id="bed-backboard"
                    transform="translate(668.000000, 0.000000)"
                    fillRule="nonzero"
                  >
                    <path
                      d="M9.06430359,7.45898972 L37.0057715,46.4532472 C38.9529076,49.1706109 40,52.4296136 40,55.772577 L40,263 L3.55271368e-15,191.434008 L-1.42108547e-14,10.3712803 C-1.45490316e-14,7.60985653 2.23857625,5.37128028 5,5.37128028 C6.61210915,5.37128028 8.12531754,6.14856952 9.06430359,7.45898972 Z"
                      id="bed-backboard-shadow"
                      style={{
                        fill: colors.bed.backboardShadow
                      }}
                    />
                    <path
                      d="M9.23286972,2.476975 L32.7218722,39.8360883 C34.3218731,42.3808799 35.172633,45.3249283 35.1766746,48.3309141 L35.4545455,255 L3.55271368e-15,184.824462 L-7.99360578e-15,5.13833065 C-8.33178265e-15,2.3769069 2.23857625,0.138330646 5,0.138330646 C6.71918257,0.138330646 8.31779847,1.02155983 9.23286972,2.476975 Z"
                      id="bed-backboard-front"
                      style={{
                        fill: colors.bed.backboardFront
                      }}
                    />
                  </g>
                  <path
                    d="M648,244 L652.558298,271 C656.527852,271 659.466698,271 661.374837,271 C663.282976,271 665.793041,271 668.905031,271 L674,244 L648,244 Z"
                    id="bed-leg-right"
                    style={{ fill: colors.bed.bedLegs }}
                    fillRule="nonzero"
                  />
                  <path
                    d="M21,244 L25.5582977,271 C29.5278519,271 32.4666984,271 34.3748372,271 C36.282976,271 38.7930406,271 41.9050308,271 L47,244 L21,244 Z"
                    id="bed-leg-left"
                    style={{ fill: colors.bed.bedLegs }}
                    fillRule="nonzero"
                  />
                  <g
                    id="bed-mattress"
                    transform="translate(0.000000, 101.000000)"
                    fillRule="nonzero"
                  >
                    <path
                      d="M19.2329493,-1.51461294e-28 L662.618268,-7.46069873e-14 C666.281364,-7.52798872e-14 669.774465,1.54543275 672.238284,4.25612875 L702,37 L1,37 L6.50181581,10.3697453 C7.74934453,4.3313739 13.0670546,8.23808384e-15 19.2329493,-1.51461294e-28 Z"
                      id="bed-mattress-top"
                      style={{
                        fill: colors.bed.mattressTop
                      }}
                    />
                    <path
                      d="M0,37 L701,37 L701,130 C701,137.179702 695.179702,143 688,143 L13,143 C5.82029825,143 8.79259876e-16,137.179702 0,130 L0,37 Z"
                      id="bed-mattress-front"
                      style={{
                        fill: colors.bed.mattressFront
                      }}
                    />
                  </g>
                  <path
                    d="M685.236321,110.479441 C691.221264,101.766699 681.74293,81.2427277 660.316958,69.4409145 C638.890986,57.6391014 602.082155,58.7472529 580.650065,69.4409145 C559.217975,80.1345762 557.931639,105.886514 564.483163,113.237379 C571.034687,120.588245 591.734991,116.99252 621.497093,118.414647 C651.259195,119.836775 679.251378,119.192182 685.236321,110.479441 Z"
                    id="bed-pillow-back"
                    style={{
                      fill: colors.bed.pillowBack
                    }}
                    fillRule="nonzero"
                  />
                  <path
                    d="M697.236321,125.479441 C703.221264,116.766699 693.74293,96.2427277 672.316958,84.4409145 C650.890986,72.6391014 614.082155,73.7472529 592.650065,84.4409145 C571.217975,95.1345762 569.931639,120.886514 576.483163,128.237379 C583.034687,135.588245 603.734991,131.99252 633.497093,133.414647 C663.259195,134.836775 691.251378,134.192182 697.236321,125.479441 Z"
                    id="bed-pillow-front"
                    style={{
                      fill: colors.bed.pillowFront
                    }}
                    fillRule="nonzero"
                  />
                  <g
                    id="bed-wrinkles"
                    transform="translate(0.000000, 98.000000)"
                  >
                    <path
                      d="M501.578792,40.4407525 C492.638034,56.4918581 496.567596,89.2002638 467.954372,100.955215 C439.341148,112.710166 429.714642,124.689564 429.714642,136.655647 C429.714642,148.621731 444.505337,155.956211 444.44447,162.974944 C444.383603,169.993677 339.272406,162.164323 295.170502,175.861119 C251.068597,189.557916 102.821086,180.474565 80.3567325,180.842033 C57.8923786,181.209501 26.4336707,162.974944 11.0775264,162.974944 C-4.27861784,162.974944 1.6496749,78.7445916 1.1989524,60.424484 C0.898470738,48.211079 1.04871157,41.0565034 1.6496749,38.9607574 C340.896259,29.2466837 507.539298,29.7400154 501.578792,40.4407525 Z"
                      id="blanket-front"
                      style={{
                        fill: colors.bed.blanketFront
                      }}
                      fillRule="nonzero"
                    />
                    <path
                      d="M551.415373,3 C536.352716,5.30346487 524.723223,8.81875255 516.526894,13.5458631 C504.232401,20.6365288 515.734651,18.3987288 516.400385,24.2343581 C517.066118,30.0699875 507.526894,30.9278326 507.526894,36.3031548 C507.526894,41.678477 506.250236,37.9009151 500.783613,41.678477 C498.758611,43.0777999 331.83074,43.0777999 0,41.678477 L7.02850615,8.66558859 C7.71933056,5.42078525 10.5929821,3.10654111 13.9104669,3.12332392 C15.7587536,3.13267421 17.0252756,3.09156624 17.710033,3 C22.1381146,2.4078738 26.8178173,0.471189168 28.3859654,0.471790104 C33.840018,0.473880175 36.3236405,1.99398122 38.608655,1.88472529 C42.4832229,1.69946629 47.05176,0.466328326 49.5100892,0.471790104 C52.7807047,0.479056575 55.9491318,2.91578783 59.0163323,3 C79.3050057,3.55703996 94.9209173,3.14536739 102.832428,3 C115.082501,2.77491518 125.984098,0.481043091 131.20088,0.471790104 C136.245517,0.462842449 141.907997,3.01419989 144.966031,3 C147.105049,2.99006754 151.152745,0.471607542 153,0.471790104 C156.128506,0.472099292 159.182836,2.97095204 162.151943,3 C197.587941,3.34668458 221.649257,3.08240024 233.949176,3 C241.157086,2.9517124 250.601815,0.482162088 255.237521,0.471790104 C260.823411,0.459292166 267.46853,3.01602155 271.904431,3 C280.27331,2.96977335 288.592843,0.479751588 295.97989,0.471790104 C301.072043,0.466301972 308.781071,2.92288286 313.864517,3 C347.091028,3.50405442 377.509132,3.08504931 410.345253,3 C412.735376,1.94343399 414.110477,0.471790104 417.171075,0.471790104 C419.211474,0.471790104 420.989592,1.31452674 422.50543,3 L551.415373,3 Z"
                      id="blanket-top"
                      style={{
                        fill: colors.bed.blanketTop
                      }}
                      fillRule="nonzero"
                    />
                    <path
                      d="M142.033055,4.9025766 C139.363096,5.63915948 136.711645,9.62188903 134.0787,16.8507652 C130.129284,27.6940796 142.033055,36.3183917 142.033055,37.3992068"
                      id="bed-wrinkle-6"
                      style={{
                        stroke: colors.bed.bedWrinkles
                      }}
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M244.853524,4 C240.281011,9.10337469 237.994755,13.4864742 237.994755,17.1492985"
                      id="bed-wrinkle-5"
                      style={{
                        stroke: colors.bed.bedWrinkles
                      }}
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M405.106204,6.49720743 C402.315058,6.40218431 399.475134,8.93043262 396.586431,14.0819524"
                      id="bed-wrinkle-4"
                      style={{
                        stroke: colors.bed.bedWrinkles
                      }}
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M124.038594,5.19869032 C121.602189,7.48063005 120.383987,12.2502268 120.383987,19.5074806 C120.383987,30.3933612 118.879041,30.3544709 117.174203,33.6189022 C115.469364,36.8833335 108,30.9594804 108,25.3643489"
                      id="bed-wrinkle-3"
                      style={{
                        stroke: colors.bed.bedWrinkles
                      }}
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M280.979411,4.39529615 C277.628896,10.5413911 276.512058,15.5947203 277.628896,19.5552837 C279.304154,25.4961288 278.459398,32.3054851 275.953639,33.6738179"
                      id="bed-wrinkle-2"
                      style={{
                        stroke: colors.bed.bedWrinkles
                      }}
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M54.082071,8 C50.230125,10.0271452 48.304152,14.814317 48.304152,22.3615155 C48.304152,33.6823132 49.8883604,33.8599814 41.0845293,31.2893442 C32.2806983,28.7187069 30.9222766,22.1264752 32.2806983,13.470701 C33.6391199,4.81492679 24.0135733,12.5079314 22,20.3190562"
                      id="bed-wrinkle-1"
                      style={{
                        stroke: colors.bed.bedWrinkles
                      }}
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </g>
                </g>
                <g
                  id="table"
                  transform="translate(1103.000000, 407.000000)"
                  fillRule="nonzero"
                  onMouseOver={this.onHover("table")}
                  onMouseLeave={this.onLeave("table")}
                  onClick={this.onClick(4)}
                  style={{ opacity: opacity.table }}
                >
                  <rect
                    id="table-leg-back-right"
                    style={{
                      fill: colors.table.tableBack
                    }}
                    x="140"
                    y="23"
                    width="14"
                    height="95"
                    rx="4"
                  />
                  <rect
                    id="table-leg-back-left"
                    style={{
                      fill: colors.table.tableBack
                    }}
                    x="1"
                    y="8"
                    width="14"
                    height="110"
                    rx="4"
                  />
                  <rect
                    id="table-leg-font-left"
                    style={{
                      fill: colors.table.tableFront
                    }}
                    x="16"
                    y="24"
                    width="19"
                    height="131"
                    rx="4"
                  />
                  <rect
                    id="table-leg-front-right"
                    style={{
                      fill: colors.table.tableFront
                    }}
                    x="147"
                    y="24"
                    width="19"
                    height="131"
                    rx="4"
                  />
                  <path
                    d="M15.5363921,16 L162,16 C165.865993,16 169,19.1340068 169,23 L169,32 C169,33.1045695 168.104569,34 167,34 L15.3015796,34 C14.1970101,34 13.3015796,33.1045695 13.3015796,32 C13.3015796,31.9066359 13.3081172,31.8133864 13.3211445,31.7209356 L15.5363921,16 Z"
                    id="table-front"
                    style={{
                      fill: colors.table.tableFront
                    }}
                  />
                  <polygon
                    id="table-top"
                    style={{
                      fill: colors.table.tableTop
                    }}
                    points="2 0 16.0087986 16.6806788 165.3242 16.6806788 146.761203 0"
                  />
                  <path
                    d="M2.31979744,0.215264533 L15.3182722,14.847716 C16.4563598,16.1288671 17.0849601,17.782986 17.0849601,19.4966346 L17.0849601,31.5569333 C17.0849601,32.6615028 16.1895296,33.5569333 15.0849601,33.5569333 C14.4467202,33.5569333 13.8468072,33.2523174 13.4702177,32.7370209 L0.792867907,15.3903039 C0.224236069,14.6122312 -0.044371886,13.6550226 0.0364401728,12.6947056 C0.594343084,6.06495714 1.02557039,2.29437553 1.33012209,1.38296081 C1.65681504,0.405285227 1.98670682,0.0160531332 2.31979744,0.215264533 Z"
                    id="table-left"
                    style={{
                      fill: colors.table.tableLeft
                    }}
                  />
                </g>
                <g
                  id="lamp"
                  transform="translate(1185.000000, 315.000000)"
                  fillRule="nonzero"
                  style={{ opacity: opacity.table }}
                >
                  <g id="lamp-base" transform="translate(21.000000, 37.000000)">
                    <rect
                      id="lamp-base-pole"
                      style={{
                        fill: colors.table.lampBase
                      }}
                      x="10"
                      y="9"
                      width="10"
                      height="48"
                    />
                    <path
                      d="M10,0 L20,0 L20,20 C18.0090987,20.699344 16.3424321,21.049016 15,21.049016 C13.6575679,21.049016 11.9909013,20.699344 10,20 L10,0 Z"
                      id="lamp-base-shadow"
                      style={{
                        fill: colors.table.lampShadow
                      }}
                    />
                    <path
                      d="M5,52 L26,52 C28.7614237,52 31,54.2385763 31,57 L31,60 C31,61.1045695 30.1045695,62 29,62 L2,62 C0.8954305,62 1.3527075e-16,61.1045695 0,60 L0,57 C-3.38176876e-16,54.2385763 2.23857625,52 5,52 Z"
                      id="lamp-base-bottom"
                      style={{
                        fill: colors.table.lampBase
                      }}
                    />
                  </g>
                  <g
                    id="lamp-string"
                    transform="translate(44.000000, 47.000000)"
                    style={{
                      fill: colors.table.lampString
                    }}
                  >
                    <circle id="lamp-string-5" cx="2" cy="2" r="2" />
                    <circle id="lamp-string-4" cx="2" cy="6" r="2" />
                    <circle id="lamp-string-3" cx="2" cy="10" r="2" />
                    <circle id="lamp-string-2" cx="2" cy="14" r="2" />
                    <circle id="lamp-string-1" cx="2" cy="18" r="2" />
                  </g>
                  <g id="lamp-shade">
                    <path
                      d="M15.356369,-3.94430453e-31 L56.4136315,-2.44249065e-15 C57.3153112,-5.81153634e-15 58.1054935,0.60335066 58.3430015,1.47318755 L70.6302042,46.4731875 C70.9211547,47.5387492 70.2932082,48.6384195 69.2276466,48.92937 C69.055967,48.976247 68.8787986,49 68.7008342,49 L2,49 C0.8954305,49 4.98490138e-14,48.1045695 4.97379915e-14,47 C4.97379915e-14,46.8073151 0.0278448635,46.6156413 0.0826713277,46.4309211 L13.4390403,1.43092113 C13.6909673,0.582133927 14.4709838,1.05082104e-15 15.356369,-3.94430453e-31 Z"
                      id="lamp-shade-front"
                      style={{
                        fill: colors.table.lampShade
                      }}
                    />
                    <path
                      d="M48.4082641,4.6487729e-14 L56.4136315,0 C57.3153112,-5.77160304e-15 58.1054935,0.60335066 58.3430015,1.47318755 L70.6302042,46.4731875 C70.9211547,47.5387492 70.2932082,48.6384195 69.2276466,48.92937 C69.055967,48.976247 68.8787986,49 68.7008342,49 L56.3387765,49 C55.3681208,49 54.5375955,48.3030425 54.3691295,47.347118 L46.4386172,2.34711799 C46.2469092,1.25931202 46.9733402,0.222061022 48.0611461,0.0303530512 C48.1757488,0.0101562179 48.2918954,4.54945238e-14 48.4082641,4.6487729e-14 Z"
                      id="lamp-shade-shadow"
                      style={{
                        fill: colors.table.lampShadow
                      }}
                    />
                  </g>
                </g>
                <g
                  id="dresser"
                  transform="translate(171.000000, 222.000000)"
                  fillRule="nonzero"
                  onMouseOver={this.onHover("dresser")}
                  onMouseLeave={this.onLeave("dresser")}
                  onClick={this.onClick(3)}
                  style={{ opacity: opacity.dresser }}
                >
                  <path
                    d="M0,16 L296,16 L296,249 C296,251.761424 293.761424,254 291,254 L5,254 C2.23857625,254 3.38176876e-16,251.761424 0,249 L0,16 Z"
                    id="dresser-front"
                    style={{
                      fill: colors.dresser.front
                    }}
                  />
                  <path
                    d="M10.7409512,0 L285.063984,1.77635684e-15 C286.541016,1.50503049e-15 287.897843,0.813957318 288.593113,2.11711614 L296,16 L0,16 L7.19129414,2.15610886 C7.87946173,0.831324066 9.24809177,2.74233834e-16 10.7409512,0 Z"
                    id="dresser-top"
                    style={{
                      fill: colors.dresser.topBorder
                    }}
                  />
                  <rect
                    id="dresser-drawer-border-3"
                    style={{
                      fill: colors.dresser.topBorder
                    }}
                    x="21"
                    y="38"
                    width="255"
                    height="54"
                    rx="6"
                  />
                  <rect
                    id="dresser-drawer-3"
                    style={{
                      fill: colors.dresser.drawer
                    }}
                    x="27"
                    y="45"
                    width="242"
                    height="40"
                    rx="6"
                  />
                  <rect
                    id="dresser-drawer-border-2"
                    style={{
                      fill: colors.dresser.topBorder
                    }}
                    x="21"
                    y="108"
                    width="255"
                    height="54"
                    rx="6"
                  />
                  <rect
                    id="dresser-drawer-border-1"
                    style={{
                      fill: colors.dresser.topBorder
                    }}
                    x="21"
                    y="178"
                    width="255"
                    height="54"
                    rx="6"
                  />
                  <rect
                    id="dresser-drawer-2"
                    style={{
                      fill: colors.dresser.drawer
                    }}
                    x="27"
                    y="115"
                    width="242"
                    height="40"
                    rx="6"
                  />
                  <rect
                    id="dresser-drawer-1"
                    style={{
                      fill: colors.dresser.drawer
                    }}
                    x="27"
                    y="184"
                    width="242"
                    height="40"
                    rx="6"
                  />
                  <circle
                    id="dresser-knob-6"
                    style={{
                      fill: colors.dresser.knob
                    }}
                    cx="62"
                    cy="65"
                    r="8"
                  />
                  <circle
                    id="dresser-knob-5"
                    style={{
                      fill: colors.dresser.knob
                    }}
                    cx="62"
                    cy="135"
                    r="8"
                  />
                  <circle
                    id="dresser-knob-4"
                    style={{
                      fill: colors.dresser.knob
                    }}
                    cx="236"
                    cy="65"
                    r="8"
                  />
                  <circle
                    id="dresser-knob-3"
                    style={{
                      fill: colors.dresser.knob
                    }}
                    cx="236"
                    cy="135"
                    r="8"
                  />
                  <circle
                    id="dresser-knob-2"
                    style={{
                      fill: colors.dresser.knob
                    }}
                    cx="62"
                    cy="205"
                    r="8"
                  />
                  <circle
                    id="dresser-knob-1"
                    style={{
                      fill: colors.dresser.knob
                    }}
                    cx="236"
                    cy="205"
                    r="8"
                  />
                </g>
                <g
                  id="clock"
                  transform="translate(960.000000, 53.000000)"
                  onMouseOver={this.onHover("decorations")}
                  onMouseLeave={this.onLeave("decorations")}
                  onClick={this.onClick(5)}
                  style={{
                    opacity: opacity.decorations
                  }}
                >
                  <circle
                    id="clock-frame"
                    style={{
                      fill: colors.decorations.frames
                    }}
                    fillRule="nonzero"
                    cx="43.5"
                    cy="43.5"
                    r="43.5"
                  />
                  <circle
                    id="clock-bg"
                    style={{
                      fill: colors.decorations.colorLight
                    }}
                    fillRule="nonzero"
                    cx="43.5"
                    cy="43.5"
                    r="35.5"
                  />
                  <polyline
                    id="clock-hands"
                    style={{
                      stroke: colors.decorations.colorDark
                    }}
                    strokeWidth="3"
                    points="41 26.1079673 41 45.3269565 65.9812844 57.4998346"
                  />
                </g>
                <g
                  id="picture"
                  transform="translate(198.000000, 41.000000)"
                  fillRule="nonzero"
                  onMouseOver={this.onHover("decorations")}
                  onMouseLeave={this.onLeave("decorations")}
                  onClick={this.onClick(5)}
                  style={{
                    opacity: opacity.decorations
                  }}
                >
                  <rect
                    id="picture-frame"
                    style={{
                      fill: colors.decorations.frames
                    }}
                    x="0"
                    y="0"
                    width="251"
                    height="136"
                    rx="3"
                  />
                  <rect
                    id="picture-bg"
                    style={{
                      fill: colors.decorations.pictureBg
                    }}
                    x="10"
                    y="11"
                    width="231"
                    height="114"
                  />
                  <path
                    d="M10.04247,78.457645 C27.4284405,72.2943447 43.5458265,70.2399112 58.3946279,72.2943447 C80.6678299,75.3759948 85.5064136,110.211552 119.570155,110.211552 C153.633897,110.211552 179.861603,101.146224 189.628581,110.211552 C196.1399,116.255104 199.39556,121.420189 199.39556,125.706808 L10.04247,125.706808 L10.04247,78.457645 Z"
                    id="picture-3"
                    style={{
                      fill: colors.decorations.colorDark
                    }}
                  />
                  <path
                    d="M34.642346,12.2967413 C47.2103146,36.521468 64.4746657,48.6338314 86.4353992,48.6338314 C108.396133,48.6338314 133.292573,36.521468 161.12472,12.2967413 L34.642346,12.2967413 Z"
                    id="picture-1"
                    style={{
                      fill: colors.decorations.colorLight
                    }}
                  />
                  <path
                    d="M240.181116,24.7196158 C212.534205,18.3224319 191.010366,19.740702 175.609599,28.9744261 C152.508449,42.8250123 149.179818,60.0182628 122.88756,60.0182628 C96.5953024,60.0182628 109.168884,85.9204026 122.88756,85.9204026 C136.606236,85.9204026 183.089196,76.6080936 201.048649,85.9204026 C213.021618,92.1286086 226.065774,102.979872 240.181116,118.474192 L240.181116,24.7196158 Z"
                    id="picture-2"
                    style={{
                      fill: colors.decorations.colorMed
                    }}
                  />
                </g>
              </g>
            </g>
          </Svg>
        </InnerContainer>
      </OuterContainer>
    );
  }
}

const mapStateToProps = state => ({
  colors: state.colors,
  results: state.indico.results
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setColors }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Illustration);
