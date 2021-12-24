import { ERROR_MESSAGE_DEFAULT } from './consts';

const utils = (() => {
  const formatError = ({ error, resource }) => {
    const objectResponse = {
      message: error.message || ERROR_MESSAGE_DEFAULT({ resource }),
      isError: true
    };
    return objectResponse;
  };

  const formatResponse = ({ data }) => {
    const objectResponse = { data, isError: false };
    if (Array.isArray(data)) {
      objectResponse.length = data.length;
    }
    return objectResponse;
  };

  const getWeekDayAbreviation = ({ weekDay }) => {
    const day = weekDay.toUpperCase();
    if (day === 'thursday') {
      return 'TH';
    }
    return day[0];
  };

  const getTime12Format = ({ time }) => {
    if (!time) {
      return null;
    }
    const timeSplitByColon = time.split(':');
    const hour = parseInt(timeSplitByColon[0]);
    const minutes = timeSplitByColon[1];

    if (hour < 10) {
      return `0${hour}:${minutes} am`;
    } else if (hour < 12) {
      return `${hour}:${minutes} am`
    } else if (hour < 22) {
      return `0${hour - 12}:${minutes} pm`;
    }
    return `${hour - 12}:${minutes} pm`;
  };

  const getRuntimeFormat = ({ runtime }) => {
    const runtimeParsed = parseInt(runtime);
    if (runtimeParsed < 60) {
      return `${runtimeParsed} m`;
    } else {
      const hours = parseInt(runtimeParsed / 60);
      const minutes = runtimeParsed % 60;
      return `${hours} h ${minutes > 0 ? `${minutes} m` : ''}`;
    }
  };

  const formatDataShow = ({ show }) => ({
    ...show,
    schedule: {
      time: getTime12Format({ time: show.schedule.time }),
      days: show.schedule.days.map(weekDay => getWeekDayAbreviation({ weekDay }))
    },
    runtime: getRuntimeFormat({ runtime: show.runtime }),
    rating: show.rating.average,
    image: show.image.medium
  });

  return {
    formatError,
    formatResponse,
    formatDataShow
  }
})();

export default utils;
