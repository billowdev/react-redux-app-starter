import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageLoaded } from "../store/ui";
import { fetchArticles } from "../store/articles";
import {
  getArticlesData,
  getArticlesIncluded,
} from "../store/articles/selector";
import { loadLocalStorage, saveLocalStorage } from "../helpers/useLocalStorage";

const App = () => {
  const dispatch = useDispatch();
  const articleData = useSelector(getArticlesData);
  const articleIncluded = useSelector(getArticlesIncluded);
  const [counter, setCouter] = useState(0);

  useEffect(() => {
    dispatch(pageLoaded);
    dispatch(fetchArticles);
  }, [dispatch]);

  useEffect(() => {
    const previosCouter = loadLocalStorage("couter-save-to-localstorage");
    if (previosCouter) {
      setCouter(previosCouter);
    }
  }, []);

  const handleIncrese = () => {
    setCouter(counter + 1);
    saveLocalStorage("couter-save-to-localstorage", counter + 1);
  };
  const handleDecrese = () => {
    setCouter(counter - 1);
    saveLocalStorage("couter-save-to-localstorage", counter - 1);
  };
  return (
    <div className="App">
      <h1>React App Starter</h1>
      <h1>Redux</h1>
      {articleData?.map((data: any, idx: number) => {
        return (
          <p key={data.id}>
            id: {data.id} <br />
            type: {data.type} <br />
            title: {data.attributes?.title} <br />
            body: {data.attributes?.body} <br />
            - Relationship - <br />
            id:{articleIncluded[idx].id} <br />
            type: {articleIncluded[idx].type} <br />
            name: {articleIncluded[idx].attributes.name}
          </p>
        );
      })}

      <h2> localstorage </h2>
      <h2>counter = {counter}</h2>
      <button onClick={handleIncrese}>increse</button>
      <button onClick={handleDecrese}>decrese</button>
    </div>
  );
};

export default App;
