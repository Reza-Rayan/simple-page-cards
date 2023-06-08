import React from "react";
import Text from "./Text";
import Card from "./Card";
import Data from './data.json'

const App = () => {
  return (
    <div className="flex lg:min-h-screen  flex-col justify-center items-center md:min-w-[80%]  lg:min-w-[70%]  lg:max-w-[80%] mx-auto px-3 py-6 lg:px-8">
      <Text />
      <div className="lg:grid block tblt-size lg:grid-cols-3 sm:grid-flow-col   mt-12">
        <div className="flex items-center justify-center">
          <Card
            extraClasses={'backgr-supr border-[#44D3D2] border-t-4'}
            title={Data.Supervisor.title}
            content={Data.Supervisor.content}
          />
        </div>
        <div>
          <Card
            extraClasses={'backgr-team border-[#EA5454] border-t-4 '}
            title={Data.TeamBuilder.title}
            content={Data.TeamBuilder.content}
          />
          <Card
            extraClasses={'backgr-karma border-[#FCAE4A] border-t-4'}
            title={Data.Karma.title}
            content={Data.Karma.content}
          />
        </div>
        <div className="flex items-center justify-center">
          <Card
            extraClasses={'backgr-calc border-[#549EF2] border-t-4'}
            title={Data.Calculator.title}
            content={Data.Calculator.content}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
