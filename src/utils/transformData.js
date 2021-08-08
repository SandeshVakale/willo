import moment from 'moment';
import colors from '../themes/Colors';

const getItem = (time, title, description, color) => {
  let item = {
    time: time,
    title: title,
    description: description,
    lineColor: color,
  };
  return item;
};
export const transformData = async data => {
  let chunkIndex = 0;
  let arrayIndex = 0;
  const sortedCycles = data.sort((a, b) => new Date(b.date.replace(' ', 'T')) - new Date(a.date.replace(' ', 'T')));
  let groupedCycles = sortedCycles.reduce((resultArray, item, index) => {
    if (
      !(
        moment(data[chunkIndex].date).diff(moment(item.date), 'minutes') <=
          30 &&
        moment(data[chunkIndex].date).diff(moment(item.date), 'minutes') >= 0
      )
    ) {
      chunkIndex = index;
      arrayIndex++;
      resultArray[arrayIndex] = []; // start a new chunk
    }
    if (resultArray[arrayIndex]) {
      resultArray[arrayIndex].push(item);
    } else {
      resultArray[arrayIndex] = [];
      resultArray[arrayIndex].push(item);
    }
    return resultArray;
  }, []);
  let finalCycles = [];
  groupedCycles.map(group => {
    if (group.length <= 1) {
      if (group[0].interrupted) {
        let item = {
          time: moment(group[0].date).utc(false).format('DD/MM/YYYY HH:mm'),
          title: 'Interuption',
          description: 'Micka did not clean his teeth',
          lineColor: colors.error,
        };
        finalCycles.push(item);
      } else if (group[0].arch === 'upper') {
        let item = {
          time: moment(group[0].date).utc(false).format('DD/MM/YYYY HH:mm'),
          title: 'Upper',
          description: 'Micka cleaned his upper teeth',
          lineColor: colors.primary,
        };
        finalCycles.push(item);
      } else {
        let item = {
          time: moment(group[0].date).utc(false).format('DD/MM/YYYY HH:mm'),
          title: 'Lower',
          description: 'Micka cleaned his lower teeth',
          lineColor: colors.primary,
        };
        finalCycles.push(item);
      }
    } else if (group.length === 2) {
      if (!group[0].interrupted && !group[1].interrupted) {
        if (
          (group[0].arch === 'upper' && group[1].arch === 'lower') ||
          (group[0].arch === 'lower' && group[1].arch === 'upper')
        ) {
          let item = {
            time: moment(group[1].date).utc(false).format('DD/MM/YYYY HH:mm'),
            title: 'Total Brushing',
            description: 'Micka cleaned his teeth',
            lineColor: colors.primaryVariant,
          };
          finalCycles.push(item);
        } else if (group[0].arch === 'lower' && group[1].arch === 'lower') {
          let item = {
            time: moment(group[1].date).utc(false).format('DD/MM/YYYY HH:mm'),
            title: 'Lower',
            description: 'Micka cleaned his Lower teeth',
            lineColor: colors.primary,
          };
          finalCycles.push(item);
        } else {
          let item = {
            time: moment(group[1].date).utc(false).format('DD/MM/YYYY HH:mm'),
            title: 'Upper',
            description: 'Micka cleaned his upper teeth',
            lineColor: colors.primary,
          };
          finalCycles.push(item);
        }
      } else if (!group[0].interrupted) {
        let item = {
          time: moment(group[1].date).utc(false).format('DD/MM/YYYY HH:mm'),
          title: group[1].arch,
          description: `Micka cleaned his ${group[1].arch} teeth`,
          lineColor: colors.primary,
        };
        finalCycles.push(item);
      } else if (!group[1].interrupted) {
        let item = {
          time: moment(group[0].date).utc(false).format('DD/MM/YYYY HH:mm'),
          title: group[0].arch,
          description: `Micka cleaned his ${group[0].arch} teeth`,
          lineColor: colors.primary,
        };
        finalCycles.push(item);
      } else {
        let item = {
          time: moment(group[1].date).utc(false).format('DD/MM/YYYY HH:mm'),
          title: 'Interuption',
          description: 'Micka did not clean his teeth',
          lineColor: colors.error,
        };
        finalCycles.push(item);
      }
    } else {
      let count = 0;
      let i;
      for (i = 0; i < group.length; i++) {
        if (group[i].interrupted) {
          count++;
        }
        if (count === group.length) {
          let item = {
            time: moment(group[group.length - 1].date)
              .utc(false)
              .format('DD/MM/YYYY HH:mm'),
            title: 'Interuption',
            description: 'Micka did not clean his teeth',
            lineColor: colors.error,
          };
          finalCycles.push(item);
        }
        if (
          (group[i + 1] &&
            !group[i].interrupted &&
            !group[i + 1].interrupted &&
            group[i].arch === 'upper' &&
            group[i + 1].arch === 'lower') ||
          (group[i + 1] &&
            !group[i].interrupted &&
            !group[i + 1].interrupted &&
            group[i].arch === 'lower' &&
            group[i + 1].arch === 'upper')
        ) {
          let item = {
            time: moment(group[i + 1].date)
              .utc(false)
              .format('DD/MM/YYYY HH:mm'),
            title: 'Total Brushing',
            description: 'Micka cleaned his teeth',
            lineColor: colors.primaryVariant,
          };
          finalCycles.push(item);
          i++;
        }
      }
    }
  });

  return finalCycles.reverse();
};
