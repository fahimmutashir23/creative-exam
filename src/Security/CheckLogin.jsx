/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { url } from "../../connection";
import useUser from "./useUser";
import Loader2 from "../Utils/Loader2";

const CheckLogin = ({ children }) => {
  const [go, setGo] = useState(false);
  const [userData, isLoading] = useUser();
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()
  const token = localStorage.getItem("token");


  useEffect(() => {
    if (!token) {
      return (
        toast.error("You are not login") && (
          navigate('/admin/login')
        )
      );
    } else {
      axios(`${url}/api/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if(isLoading) return setLoader(true)
        if (res.data.userData.id === userData.userData.id) {
          setGo(true);
          setLoader(false)
        } else {
          return toast.error("You are not login ") && (
            navigate('/admin/login')
          )
        }
      })
      .catch(() => {
        return toast.error("You are not login 3") && navigate('/admin/login')
      });
    }
  }, [token, isLoading]);

  if(loader){
    return <Loader2 />
  }

  return go && children;
};

export default CheckLogin;
