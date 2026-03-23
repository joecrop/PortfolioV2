import{j as e}from"./index-DBG4Xdd-.js";const i={title:"A 3-bit Flash ADC from NAND3 Gates and a Resistor Ladder",date:"2021-07-01",description:"Extending the NAND-comparator concept into a full 3-bit Flash ADC using a resistor voltage divider and eight comparator stages.",tags:["EE","ADC","Analog","7400-series"]};function s(r){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{children:"Introduction"}),`
`,e.jsxs(t.p,{children:["In the ",e.jsx(t.a,{href:"/projects/comparator",children:"previous article"})," we showed that two 7410 NAND3 gates in an SR-latch feedback configuration behave as a clocked analog comparator. Now let's take this further and build a real ",e.jsx(t.strong,{children:"3-bit Flash ADC"})," using 8 such comparators and a resistor ladder."]}),`
`,e.jsx(t.h2,{children:"Flash ADC Architecture"}),`
`,e.jsxs(t.p,{children:["A Flash ADC (also called a parallel ADC) uses 2^N - 1 comparators in parallel to simultaneously compare the input voltage against 2^N - 1 reference levels. For 3 bits we need ",e.jsx(t.strong,{children:"7 comparators"}),"."]}),`
`,e.jsx(t.p,{children:"Each reference level is:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`V_ref[k] = (k / 2^N) * VDD,  k = 1, 2, ..., 7
`})}),`
`,e.jsxs(t.p,{children:["Each comparator outputs ",e.jsx(t.code,{children:"1"})," if V_in > V_ref[k], producing a ",e.jsx(t.em,{children:"thermometer code"})," that is then converted to binary."]}),`
`,e.jsx(t.h2,{children:"Resistor Ladder"}),`
`,e.jsx(t.p,{children:"A simple voltage divider ladder divides the 5V supply into 7 equally-spaced reference levels:"}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"ΔV = 5V / 8 = 625 mV per step"})}),`
`,e.jsx(t.p,{children:"Using 8 equal-value resistors (1kΩ) in series from VDD to GND gives taps at 625mV, 1.25V, 1.875V, 2.5V, 3.125V, 3.75V, and 4.375V."}),`
`,e.jsx(t.h2,{children:"Priority Encoder"}),`
`,e.jsxs(t.p,{children:["The thermometer output of the 7 comparators is fed into a ",e.jsx(t.strong,{children:"priority encoder"})," (74148) which converts it to a 3-bit binary output. This is the standard Flash ADC output stage."]}),`
`,e.jsx(t.h2,{children:"Results"}),`
`,e.jsx(t.p,{children:"At 40MHz (matching the single comparator performance):"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Parameter"}),e.jsx(t.th,{children:"Value"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Resolution"}),e.jsx(t.td,{children:"3 bits"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"INL"}),e.jsx(t.td,{children:"±0.5 LSB"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"DNL"}),e.jsx(t.td,{children:"±0.5 LSB"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Max Sample Rate"}),e.jsx(t.td,{children:"~40 MHz"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Power"}),e.jsx(t.td,{children:"~2.3W (all stages)"})]})]})]}),`
`,e.jsx(t.h2,{children:"Conclusion"}),`
`,e.jsx(t.p,{children:"Using the NAND-comparator building block, a functional 3-bit Flash ADC can be assembled entirely from 7400-series logic chips and passive components. While not competitive with dedicated ADC ICs, this demonstrates the surprising analog utility of standard digital gates and makes for an excellent educational circuit."})]})}function a(r={}){const{wrapper:t}=r.components||{};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s(r)}export{a as default,i as frontmatter};
