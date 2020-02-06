import * as React from "react";
import ReactMarkdown from "react-markdown";
//Mango-Library
import { BlogML, SeoML } from "../../mangoLy";
//Context
import { LanguageContext } from "../../context/language";
export interface BlogSCProps {
  data: any;
}

const BlogSC: React.SFC<BlogSCProps> = props => {
  const { data } = props;
  const { languageConfig, language } = React.useContext(LanguageContext);
  return (
    <BlogML>
      <SeoML
        title={language === "es" ? data.posts[0].titulo : data.posts[0].title}
        description={
          language === "es"
            ? data.posts[0].descripcion
            : data.posts[0].description
        }
        img={data.posts[0].image.url}
        keywords={
          language === "es"
            ? data.posts[0].palabrasclaves
            : data.posts[0].keywords
        }
      />
      <br />
      <br />

      {language === "es" ? (
        <ReactMarkdown source={data.posts[0].articulo} />
      ) : (
        <ReactMarkdown source={data.posts[0].article} />
      )}
    </BlogML>
  );
};

export default BlogSC;
