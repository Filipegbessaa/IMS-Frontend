import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { economyAPI } from "../../../Services/api";
import useLayout from "../../../contexts/layout";

function PIBPerCapta() {
  const { collapseSideBar } = useLayout();
  const [years, setYears] = useState([]);
  const [numOfConstructionJobs, setNumOfConstructionJobs] = useState([]);

  const getConstructionJobs = async () => {
    try {
      const { data } = await economyAPI.get(
        "/t6p1?select=B3,E8,V8&V8=eq.RECIFE",
        {}
      );

      setYears(data.map((d) => d.B3).reverse());
      setNumOfConstructionJobs(data.map((d) => d.E8).reverse());
    } catch (error) {
      alert("Ocorreu um erro ao buscar os items");
    }
  };
  useEffect(() => {
    getConstructionJobs();
  }, []);

  useEffect(() => {
    Highcharts.charts.forEach((c) => {
      if (c !== undefined) {
        setTimeout(() => c.reflow(), 300);
      }
    });
  }, [collapseSideBar]);

  const constructionJobsOptions = {
    title: {
      text: "Evolução do número de emprego no setor de Construção",
    },
    subtitle: {
      text: "Fonte: IBGE",
    },
    chart: {
      zoomType: "x",
    },
    yAxis: {
      title: {
        text: "Empregos",
      },
    },
    xAxis: {
      categories: years,
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
      },
    },
    series: [
      {
        name: "Recife",
        data: numOfConstructionJobs,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={constructionJobsOptions}
    />
  );
}

export default PIBPerCapta;
