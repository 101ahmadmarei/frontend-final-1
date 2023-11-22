import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateAddress } from '../../API/addNewAddress';
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import TxtInput from '../textInput/textInput';
import CoralBtn from '../CoralBtn/CoralBtn';
function NewAddress() {
    const [value, setValue] = useState(1);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const createAddressMutation = useCreateAddress();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = (data) => {
        console.log(data);
        const userdata = { "first_name": data.firstName, "last_name": data.lastName, "mobile_number": data.mobileNumber, "street_address": data.email, "state": data.location, "city": "nablus", "pin_code": "B1001" };
        console.log(userdata);
        createAddressMutation.mutate(userdata, {
            onSuccess: () => {
                navigate('/');

            },
            onError: () => {
                handleOpen();
            },
        });
    };
    return (


        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <TxtInput label={'First Name'} type={'text'} register={register('firstName')} />
                </Grid>
                <Grid item xs={6}>
                    <TxtInput label={'Last Name'} type={'text'} register={register('lastName')} />
                </Grid>
                <Grid item xs={6}>
                    <TxtInput label={'Mobile Number'} type={'number'} register={register('mobileNumber')} />
                </Grid>
                <Grid item xs={6}>
                    <TxtInput label={'Email'} type={'text'} register={register('email')} />
                </Grid>
                <Grid item xs={12}>
                    <TxtInput label={'Location'} type={'text'} register={register('location')} />
                </Grid>
                <Grid item xs={12}>
                    <CoralBtn label={'submit'} type={'contained'} />
                </Grid>
            </Grid>
        </form>
    );
}

export default NewAddress;
