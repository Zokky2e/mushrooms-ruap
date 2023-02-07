import { useState } from "react";
import "../App.css";

function Home() {
  //cap-shape - bell=b,conical=c,convex=x,flat=f, knobbed=k,sunken=s
  const capShapeOptions = [
    { value: "b", label: "bell" },
    { value: "c", label: "conical" },
    { value: "f", label: "flat" },
    { value: "k", label: "knobbed" },
    { value: "s", label: "sunken" },
  ];
  const [selectedCapShape, setSelectedCapShape] = useState<string>();
  //cap-surface - fibrous=f,grooves=g,scaly=y,smooth=s
  const capSurfaceOptions = [
    { value: "f", label: "fibrous" },
    { value: "g", label: "grooves" },
    { value: "y", label: "scaly" },
    { value: "s", label: "smooth" },
  ];
  const [selectedCapSurface, setSelectedCapSurface] = useState<string>();
  //cap-color brown=n,buff=b,cinnamon=c,gray=g,green=r,pink=p,purple=u,red=e,white=w,yellow=y
  const capColorOptions = [
    { value: "n", label: "brown" },
    { value: "b", label: "buff" },
    { value: "c", label: "cinnamon" },
    { value: "g", label: "gray" },
    { value: "r", label: "green" },
    { value: "p", label: "pink" },
    { value: "u", label: "purple" },
    { value: "e", label: "red" },
    { value: "w", label: "white" },
    { value: "y", label: "yellow" },
  ];
  const [selectedCapColor, setSelectedCapColor] = useState<string>();
  //bruises - bruises=t,no=f
  const [hasBruises, setHasBruises] = useState<boolean>(false);
  //odor - almond=a,anise=l,creosote=c,fishy=y,foul=f,musty=m,none=n,pungent=p,spicy=s
  const odorOptions = [
    { value: "a", label: "almond" },
    { value: "l", label: "anise" },
    { value: "c", label: "creosote" },
    { value: "y", label: "fishy" },
    { value: "f", label: "foul" },
    { value: "m", label: "musty" },
    { value: "n", label: "none" },
    { value: "p", label: "pungent" },
    { value: "s", label: "spicy" },
  ];
  const [selectedOdor, setSelectedOdor] = useState<string>();
  //gill-attachment - attached=a, descending=d, free=f, notched=n
  const gillAttachmentOptions = [
    { value: "a", label: "attached" },
    { value: "d", label: "descending" },
    { value: "f", label: "free" },
    { value: "n", label: "notched" },
  ];
  const [selectedGillAttachment, setSelectedGillAttachment] =
    useState<string>();
  //gill-spacing - close=c,crowded=w,distant=d
  const gillSpacingOptions = [
    { value: "c", label: "close" },
    { value: "w", label: "crowded" },
    { value: "d", label: "distant" },
  ];
  const [selectedGillSpacing, setSelectedGillSpacing] = useState<string>();
  //gill-size - broad=b,narrow=n
  const gillSizeOptions = [
    { value: "b", label: "broad" },
    { value: "n", label: "narrow" },
  ];
  const [selectedGillSize, setSelectedGillSize] = useState<string>();
  //gill-color - black=k,brown=n,buff=b,chocolate=h,gray=g,green=r,orange=o,pink=p,purple=u,red=e,white=w,yellow=y
  const gillColorOptions = [
    { value: "k", label: "black" },
    { value: "n", label: "brown" },
    { value: "b", label: "buff" },
    { value: "h", label: "chocolate" },
    { value: "g", label: "gray" },
    { value: "r", label: "green" },
    { value: "o", label: "orange" },
    { value: "n", label: "pink" },
    { value: "u", label: "purple" },
    { value: "e", label: "red" },
    { value: "w", label: "white" },
    { value: "y", label: "yellow" },
  ];
  const [selectedGillColor, setSelectedGillColor] = useState<string>();
  return (
    <div>
      <div>
        <h2>Shrooms be wilding</h2>
        <p>New Home Page</p>
        <p>Ruap project</p>
      </div>
      <div>
        <form>
          <label>Cap Shape</label>
          <select
            value={selectedCapShape}
            onChange={(e) => setSelectedCapShape(e.target.value)}
          >
            {capShapeOptions.map((o) => {
              return <option value={o.value}>{o.label}</option>;
            })}
          </select>
          <label>Cap Surface</label>
          <select
            value={selectedCapSurface}
            onChange={(e) => setSelectedCapSurface(e.target.value)}
          >
            {capSurfaceOptions.map((o) => {
              return <option value={o.value}>{o.label}</option>;
            })}
          </select>
          <label>Cap Color</label>
          <select
            value={selectedCapColor}
            onChange={(e) => setSelectedCapColor(e.target.value)}
          >
            {capColorOptions.map((o) => {
              return <option value={o.value}>{o.label}</option>;
            })}
          </select>
          <label>Bruises</label>
          <input
            type="checkbox"
            checked={hasBruises}
            onChange={() => {
              setHasBruises(!hasBruises);
            }}
          />
          <label>Odor</label>
          <select
            value={selectedOdor}
            onChange={(e) => setSelectedOdor(e.target.value)}
          >
            {odorOptions.map((o) => {
              return <option value={o.value}>{o.label}</option>;
            })}
          </select>
          <label>Gill Attachment</label>
          <select
            value={selectedGillAttachment}
            onChange={(e) => setSelectedGillAttachment(e.target.value)}
          >
            {gillAttachmentOptions.map((o) => {
              return <option value={o.value}>{o.label}</option>;
            })}
          </select>
          <label>Gill Spacing</label>
          <select
            value={selectedGillSpacing}
            onChange={(e) => setSelectedGillSpacing(e.target.value)}
          >
            {gillSpacingOptions.map((o) => {
              return <option value={o.value}>{o.label}</option>;
            })}
          </select>
          <label>Gill Size</label>
          <select
            value={selectedGillSize}
            onChange={(e) => setSelectedGillSize(e.target.value)}
          >
            {gillSizeOptions.map((o) => {
              return <option value={o.value}>{o.label}</option>;
            })}
          </select>
          <label>Gill Color</label>
          <select
            value={selectedGillColor}
            onChange={(e) => setSelectedGillColor(e.target.value)}
          >
            {gillColorOptions.map((o) => {
              return <option value={o.value}>{o.label}</option>;
            })}
          </select>
        </form>
      </div>
    </div>
  );
}

export default Home;
