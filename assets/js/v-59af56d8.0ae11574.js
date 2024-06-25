"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[57294],{38600:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-59af56d8","path":"/devices/SA12IZL.html","title":"TuYa SA12IZL control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa SA12IZL control via MQTT","description":"Integrate your TuYa SA12IZL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-09-30T20:52:51.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Smoke (binary)","slug":"smoke-binary","link":"#smoke-binary","children":[]},{"level":3,"title":"Battery level (enum)","slug":"battery-level-enum","link":"#battery-level-enum","children":[]},{"level":3,"title":"Alarm (binary)","slug":"alarm-binary","link":"#alarm-binary","children":[]},{"level":3,"title":"Silence siren (binary)","slug":"silence-siren-binary","link":"#silence-siren-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1719306774000},"filePathRelative":"devices/SA12IZL.md"}')},460331:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var i=a(166252);const l=(0,i._)("h1",{id:"tuya-sa12izl",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#tuya-sa12izl","aria-hidden":"true"},"#"),(0,i.Uk)(" TuYa SA12IZL")],-1),n=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),o=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"SA12IZL")],-1),r=(0,i._)("td",null,"Vendor",-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Smart smoke alarm")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"battery, smoke, battery_level, alarm, silence_siren, linkquality")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SA12IZL.png",alt:"TuYa SA12IZL"})])],-1),u=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="smoke-binary" tabindex="-1"><a class="header-anchor" href="#smoke-binary" aria-hidden="true">#</a> Smoke (binary)</h3><p>Smoke alarm status. Value can be found in the published state on the <code>smoke</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> smoke is ON, if <code>false</code> OFF.</p><h3 id="battery-level-enum" tabindex="-1"><a class="header-anchor" href="#battery-level-enum" aria-hidden="true">#</a> Battery level (enum)</h3><p>Battery level state. Value can be found in the published state on the <code>battery_level</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>low</code>, <code>middle</code>, <code>high</code>.</p><h3 id="alarm-binary" tabindex="-1"><a class="header-anchor" href="#alarm-binary" aria-hidden="true">#</a> Alarm (binary)</h3><p>Enable the alarm. Value can be found in the published state on the <code>alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm is ON, if <code>false</code> OFF.</p><h3 id="silence-siren-binary" tabindex="-1"><a class="header-anchor" href="#silence-siren-binary" aria-hidden="true">#</a> Silence siren (binary)</h3><p>Silence the siren. Value can be found in the published state on the <code>silence_siren</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;silence_siren&quot;: NEW_VALUE}</code>. If value equals <code>true</code> silence siren is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),h={},b=(0,a(983744).Z)(h,[["render",function(e,t){const a=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),l,(0,i._)("table",null,[n,(0,i._)("tbody",null,[o,(0,i._)("tr",null,[r,(0,i._)("td",null,[(0,i.Wm)(a,{to:"/supported-devices/#v=TuYa"},{default:(0,i.w5)((()=>[(0,i.Uk)("TuYa")])),_:1})])]),d,s,c])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);