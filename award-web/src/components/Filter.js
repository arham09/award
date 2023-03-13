import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rupiah } from "../utils/rupiah";
import { IoMdCloseCircle } from "react-icons/io";
import axios from "axios";
import { API_URL } from "../utils/const";

const Filter = (props) => {
  // const dispatch = useDispatch();
  const { GetAuth } = useSelector((state) => state.auth);

  const [checkedState, setCheckedState] = useState([]);
  const [allCheckedState, setAllCheckedState] = useState(false);
  const [filters, setFilters] = useState({
    typeId: [],
    type: [],
    point: null,
    minPoint: 0,
    maxPoint: 0,
    page: 1,
    limit: 5,
  });
  const [data, setData] = useState({
    data: [],
  });

  const handleAlltype = () => {
    setFilters({
      ...filters,
      typeId: !allCheckedState ? data.data.map((item) => item.id) : [],
      type: !allCheckedState ? data.data.map((item) => item.name) : [],
    });

    setCheckedState(new Array(data.data.length).fill(!allCheckedState));
    setAllCheckedState(!allCheckedState);
  };

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    const filter = data.data.filter(
      (item, index) => updatedCheckedState[index]
    );

    setFilters({
      ...filters,
      typeId: filter.map((item) => item.id),
      type: filter.map((item) => item.name),
    });
  };

  const onReset = (type) => {
    if (type === "all") {
      setFilters({
        page: 1,
        limit: 5,
        point: null,
        type: [],
        typeId: [],
        minPoint: 0,
        maxPoint: 0,
      });
      document.getElementById("rangeinput").value = 0;
      setCheckedState(new Array(data.data.length).fill(false));
      setAllCheckedState(false);
    }
    if (type === "type") {
      setFilters({ ...filters, limit: 5, type: [], typeId: [], page: 1 });
      setCheckedState(new Array(data.data.length).fill(false));
      setAllCheckedState(false);
    }
    if (type === "point") {
      setFilters({
        ...filters,
        limit: 5,
        point: null,
        minPoint: 0,
        maxPoint: 0,
        page: 1,
      });
      document.getElementById("rangeinput").value = 0;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios({
        method: "GET",
        url: `${API_URL}/v1/awards/types`,
        headers: {
          Authorization: `Bearer ${GetAuth.data?.accessToken}`,
        },
      });

      setData(res.data);
      setCheckedState(new Array(res.data.data.length).fill(false));
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasNavbar1"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className="container">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Filter
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {filters.point !== null && (
            <>
              <span className="badge text-bg-primary">
                point: 10000 - {filters.point?.split(",")[1]}{" "}
                <IoMdCloseCircle
                  onClick={() => onReset("point")}
                  className="icon"
                />
              </span>
              <br />
            </>
          )}
          {filters.type.length !== 0 && (
            <>
              <span className="badge text-bg-primary">
                Type: {filters.type.join(",")}{" "}
                <IoMdCloseCircle
                  onClick={() => onReset("type")}
                  className="icon"
                />
              </span>
              <br />
            </>
          )}
          {filters.point !== null || filters.type?.length !== 0 ? (
            <span
              className="badge text-bg-primary"
              style={{ cursor: "pointer" }}
              onClick={() => onReset("all")}
            >
              Clear All Filter
            </span>
          ) : (
            ""
          )}
          <form>
            <p className="title mt-3">point Needed</p>
            <div className="rangeSelect">
              <p>IDR {rupiah(10000)}</p>
              <p>
                IDR{" "}
                {filters.point === null
                  ? "-"
                  : rupiah(filters.point.split(",")[1])}
              </p>
            </div>
            <input
              id="rangeinput"
              type="range"
              min="10000"
              max="5000000"
              onChange={(e) =>
                setFilters({
                  ...filters,
                  point: `10000,${e.target.value}`,
                  minPoint: 10000,
                  maxPoint: parseInt(e.target.value),
                })
              }
              className="w-100 custom-range"
            />
            <p className="title mt-2 mb-2">Reward Type</p>
            <div key="all" className="form-check">
              <input
                className="form-check-input"
                id="custom-checkbox-all"
                value="type-all"
                checked={allCheckedState}
                type="checkbox"
                onChange={() => handleAlltype()}
              />
              <label
                className="form-check-label"
                htmlFor={`custom-checkbox-all`}
              >
                All Type
              </label>
            </div>
            {data.data.map((item, index) => {
              return (
                <div key={index} className="form-check">
                  <input
                    className="form-check-input"
                    id={`custom-checkbox-${item.id}`}
                    value={item.name}
                    checked={checkedState[index]}
                    type="checkbox"
                    onChange={() => handleOnChange(index)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`custom-checkbox-${item.id}`}
                  >
                    {item.name}
                  </label>
                </div>
              );
            })}
            <button
              className="btn btn-primary mt-2 w-100"
              data-bs-dismiss="offcanvas"
              onClick={(e) => props.onSubmit(e, filters)}
            >
              Filter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filter;
