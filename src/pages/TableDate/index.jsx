import React, { useEffect, useState } from 'react';
import frLocale from 'date-fns/locale/fr';
import ruLocale from 'date-fns/locale/ru';
import deLocale from 'date-fns/locale/de';
import enLocale from 'date-fns/locale/en-US';
import arSaLocale from 'date-fns/locale/ar-SA';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';



//chỗ này để cho mảng ngày vào để disable
function disableWeekends(date) {
    if (date.getMonth() === 7) {
        return date.getDate() === 6;
    }
}


//k quan trọng
const localeMap = {
    en: enLocale,
    fr: frLocale,
    de: deLocale,
    ru: ruLocale,
    ar: arSaLocale,
};

export default function Index() {
    const [locale, setLocale] = useState('ru');
    const [datePickerValue, setDatePickerValue] = useState(new Date());
    const [test, setTest] = useState([

    ])

    //obj call từ api
    const [arrayValue, setArrayValue] = useEffect({})
    useEffect(() => {
        const callApi = async () => {
            const response = await fetch('http://localhost:8080/api/v1/services/1/services')
            setArrayValue(response.data)
        }
        callApi()
    }, [setArrayValue]);

    const handleChangeDate = (e) => {
        //set value ngày chọn
        setDatePickerValue(e)

        //convert value date chọn về chuỗi năm-thang-ngày
        function convert(str) {
            var mnths = {
                Jan: "01",
                Feb: "02",
                Mar: "03",
                Apr: "04",
                May: "05",
                Jun: "06",
                Jul: "07",
                Aug: "08",
                Sep: "09",
                Oct: "10",
                Nov: "11",
                Dec: "12"
            },
                date = str.split(" ");

            return [date[3], mnths[date[1]], date[2]].join("-");
        }

        //new date để convert ngược lại về date 
        setTest((er) => [...er, new Date(convert(e.toString()))])
    }

    //k quan trọng
    const selectLocale = (newLocale) => {
        setLocale(newLocale);
    };

    return (
        <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={localeMap[locale]}
        >
            <Stack spacing={3}>
                <ToggleButtonGroup value={locale} exclusive sx={{ mb: 2, display: 'block' }}>
                    {Object.keys(localeMap).map((localeItem) => (
                        <ToggleButton
                            key={localeItem}
                            value={localeItem}
                            onClick={() => selectLocale(localeItem)}
                        >
                            {localeItem}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
                <DatePicker

                    value={datePickerValue}
                    onChange={handleChangeDate}
                    renderInput={(params) => <TextField {...params} />}
                    shouldDisableDate={disableWeekends}
                />

            </Stack>
        </LocalizationProvider>
    );
}