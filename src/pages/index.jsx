import Head from "next/head";
import Image from "next/image";
import BlockOne from "@/components/block/blockOne/blockOne";
import BlockTwo from "@/components/block/blockTwo/blockTwo";
import Chart1 from "@/components/charts/chart1";
import Chart2 from "@/components/charts/chart2";
import Chart3 from "@/components/charts/chart3";
import Table1 from "@/components/tables/table1.jsx";

export default function index() {
  return (
    <>
      <div className="row g-2">
        {/* block */}
        <div className="col-lg-3">
          <BlockOne
            icon="/vectors/icon1.svg"
            label="Last day power usage wh"
            count="124"
          />
        </div>
        {/* block end */}
        {/* block */}
        <div className="col-lg-3">
          <BlockOne icon="/vectors/icon2.svg" label="Node Count" count="1246" />
        </div>
        {/* block end */}
        {/* block */}
        <div className="col-lg-3">
          <BlockOne
            icon="/vectors/vector.png"
            label="Gateway Count"
            count="1246"
          />
        </div>
        {/* block end */}
        {/* block */}
        <div className="col-lg-3">
          <BlockOne
            label="Gateway Count"
            count="+%89"
            bg="/images/night.png"
            color="white"
          />
        </div>
        {/* block end */}
      </div>

      <div className="row g-2 mt-1">
        <div className="col-lg-7">
          <div className="w-100 mb-2">
            <BlockTwo title="Enerji Tüketimi" desc="Updated 48 minutes ago">
              <Chart2 />
            </BlockTwo>
          </div>
          <div className="w-100">
            <BlockTwo title="Enerji Tüketimi" desc="">
              <Chart3 />
            </BlockTwo>
          </div>
        </div>
        <div className="col-lg-5">
          <BlockTwo style={{ height: "100%" }}>
            <Table1 />
          </BlockTwo>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div className="fullMap ratio ratio-21x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48165.54128621186!2d28.803985496431824!3d41.01767837193686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa36a68702603%3A0xa5a84a3001d2f4ce!2zQmFrxLFya8O2eS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1679331928299!5m2!1str!2str"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
