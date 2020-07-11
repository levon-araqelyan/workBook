export function validateCrossingOfDates(startDate, endDate, worksList, workId) {
    const timeStampOfStartDate = new Date(startDate).getTime();
    const timeStampOfEndDate = new Date(endDate).getTime();
    let crossedWork = {};

    if (timeStampOfStartDate > timeStampOfEndDate) {
        return {
            valid: false,
            message: "Start Date is not smaller than End date"
        }
    }

    const valid = !worksList.some(eachWork => {
        const tSofCurrentStartDate = new Date(eachWork.startDate).getTime();
        const tSofCurrentEndDate = new Date(eachWork.endDate).getTime();
        if (timeStampOfStartDate < tSofCurrentEndDate && eachWork.workId !== workId) {
            if (timeStampOfEndDate < tSofCurrentStartDate) {
                return false
            }

            crossedWork = eachWork;
            return true
        } else {
            return false
        }
    });

    return {
        valid,
        message: `Your selected range of time is crossed with ${crossedWork.workplace} (From ${crossedWork.startDate} To ${crossedWork.endDate}).`
    }
}

