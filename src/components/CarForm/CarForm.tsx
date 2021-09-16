import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseMake, chooseModel } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface CarFormProps {
    id?:string;
    data?: {};
}

interface CarState{
    make: string;
    model: string;
}

export const CarForm = ( props:CarFormProps) => {
    const dispatch = useDispatch();
    let{ carData, getData} = useGetData();
    const store = useStore();
    const make = useSelector<CarState>(state => state.make)
    const model = useSelector<CarState>(state =>state.model)
    const {register, handleSubmit} = useForm({})
    const onSubmit = async (data:any,event:any) => {
        console.log(props.id)

        if(props.id!){
            await server_calls.update(props.id!,data)
            console.log(`updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();

        }else {
            dispatch (chooseMake(data.make))
            dispatch (chooseModel(data.model))
            await server_calls.create(store.getState())
            window.location.reload();
        }
    }
    return(
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="make">Car Make</label>
                <Input {...register('make')} name='make' placeholder='Make' />
            </div>
            <div>
                <label htmlFor="make">Car Model</label>
                <Input {...register('model')} name='model' placeholder='Model' />
            </div>
            <div>
                <label htmlFor="make">Car Year</label>
                <Input {...register('year')} name='year' placeholder='Year' />
            </div>
            <div>
                <label htmlFor="make">Car Color</label>
                <Input {...register('color')} name='color' placeholder='Color' />
            </div>
            <Button type= 'submit'>Submit</Button>
            </form>
        </div>
    )
}