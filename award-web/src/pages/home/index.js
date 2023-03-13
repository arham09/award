import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Filter from "../../components/Filter";
import { useSelector, useDispatch } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/home.scss";
import axios from "axios";
import ImageLoader from "../../components/Loader";
import { AuthLogout } from "../../redux/actions/auth";
import { API_URL } from "../../utils/const";

const IndexHome = () => {
  const dispatch = useDispatch();
  const { GetAuth } = useSelector((state) => state.auth);

  const [filters, setFilters] = useState({
    typeId: [],
    type: [],
    point: null,
    minPoint: 0,
    maxPoint: 0,
    page: 1,
    limit: 5,
  });
  const [noData, setNoData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    totalPage: 1,
    total: 0,
    result: [],
  });

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!noData) {
        setFilters({
          ...filters,
          page: filters.page + 1,
        });
      }
    }
  };

  const buildReqParam = (filter) => {
    let param = `?`;

    if (filter.typeId.length > 0) {
      const filterType = filter.typeId.map((item, index) => {
        return `&typeId[${index}]=${item}`;
      });

      param = param + `${filterType.join("")}`;
    }

    if (filter.maxPoint > 0 && filter.maxPoint > filter.minPoint) {
      param =
        param + `&minPoint=${filter.minPoint}&maxPoint=${filter.maxPoint}`;
    }

    return `${param}&page=${filter.page}&limit=${filter.limit}`;
  };

  const loadData = async (param, token) => {
    setLoading(true);
    axios({
      method: "GET",
      url: `${API_URL}/v1/awards${buildReqParam(param)}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          setData({
            result: [...res.data.data],
            totalPage: res.data.pages,
            total: res.data.total,
          });
        }
        if (res.data.data.length === 0) {
          setNoData(true);
        }
      })
      .catch((err) => {
        if (err.response.status === 403) {
          dispatch(AuthLogout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadData(filters, GetAuth.data?.accessToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.page]);

  const onSubmit = async (e, filters) => {
    e.preventDefault();
    setFilters(filters);

    await loadData(filters, GetAuth.data.accessToken);
  };


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="verticalrow" >
          {data.result.map((item, index) => (
            <div key={index} className="col-md-4" >
              <div className="imagecontent">
                <div className="overlayType">
                  {item.awardType === "Vouchers" ? (
                    <div className="badge text-bg-info">{item.awardType}</div>
                  ) : item.awardType === "Giftcard" ? (
                    <div className="badge text-bg-success">
                      {item.awardType}
                    </div>
                  ) : item.awardType === "Products" ? (
                    <div className="badge text-bg-warning">
                      {item.awardType}
                    </div>
                  ) : (
                    <div className="badge text-bg-warning">{item.nameType}</div>
                  )}
                </div>
                <LazyLoadImage
                  src={item.imageUrl}
                  alt={item.title}
                  effect="opacity"
                  className="image"
                  placeholder={
                    <div className="text-center">
                      <ImageLoader />
                    </div>
                  }
                />
                <div className="overlayPoin">{item.point} POINT</div>
              </div>
              <h5 className="titleproduct">{item.title}</h5>
            </div>
          ))}
          {loading ? (
            <div className="col-md-12 text-center">
              {" "}
              <div className="spinner-border text-secondary" role="status">
                {" "}
              </div>{" "}
            </div>
          ) : null}
          {noData ? (
            <div className="col-md-12 text-center">
              {" "}
              <h4>No Award Found</h4>{" "}
            </div>
          ) : null}
        </div>
      </div>
      <Filter onSubmit={onSubmit} />
    </>
  );
};

export default IndexHome;
