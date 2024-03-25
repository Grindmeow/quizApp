import { useEffect } from "react"
import { useState } from "react"
import { data } from "../dummy/data"
import { useDispatch } from "react-redux"
import * as Action from '../features/questionReducer'


//fetch question hook to fetch api data and set value to the store
export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: false })

  useEffect(() => {
    setGetData(prev => ({ ...prev, isLoading: true }));

    //async function to fetch backend data

    (async () => {
      try {
        let question = await data;

        if (question.length > 0) {
          setGetData(prev => ({ ...prev, isLoading: false }));
          setGetData(prev => ({ ...prev, apiData: question }));

          //dispatch on action
          dispatch(Action.startExamAction(question))
        } else {
          throw new Error("No Question Available")
        }
      } catch {
        setGetData(prev => ({ ...prev, isLoading: false }));
        setGetData(prev => ({ ...prev, serverError: Error }))
      }
    })();
  }, [dispatch])

  return [getData, setGetData];
}