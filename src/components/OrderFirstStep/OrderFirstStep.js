import { Box }  from "@mui/system";
import { FormLabel, Typography, TextField, FormControlLabel, Checkbox, RadioGroup, Radio, Select, MenuItem, InputLabel, FormControl, Button } from "@mui/material";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { OrderSecondStep } from "../OrderSecondStep";

export function OrderFirstStep({ orderIsOpen, setOrderIsOpen }) {

    const { reset,  formState: { errors, isSubmitted }, handleSubmit, control, } = useForm({
        mode: 'onBlur',
        reValidateMode: "onChange",
        defaultValues: {
            firstName: '',
            secondName: '',
            city: '',
            address: '',
            reserveAddress: '',
            email: '',
            delivery: 'post',
            comment: '',
            feedback: true,
            country: 'Ukraine'
        }
    })
    const customSubmitHandler = (order) => {
        const orderInformation = { ...order }
        console.log(orderInformation, isSubmitted);

        // console.log(e.formState)
        // console.log(orderInformation)
        // reset()
    }

    return (
        <Box sx={{
            position: 'absolute',
            backgroundColor: 'secondary',
            zIndex: 0,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            // minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            phoneNumber: '',
        }}>
            <form onSubmit={handleSubmit(customSubmitHandler)}>
                <Typography variant='h3' color='primary'>Order</Typography>
                <Box >
                    <Box sx={{display: 'flex'}}>
                        <div >
                            <Controller
                                render={({field}) => (
                                    // console.log(field)
                                    <TextField {...field} sx={{zIndex: 0}} label='First name' ref={ field.ref } onBlur={ field.onBlur }/>
                                )}
                                // ref={ ref }
                                control={ control }X
                                name='firstName'
                                rules={{
                                    required: 'This is required field',
                                    minLength: {
                                        value: 2,
                                        message: 'This name is too short'
                                    },
                                    maxLength: {
                                        value: 25,
                                        message: 'This name is too long'
                                    },

                                }}

                            />
                            { errors.firstName && <div>{ errors.firstName.message }</div> }
                        </div>
                        <div>
                            <Controller
                                render={({field}) => (
                                    <TextField {...field} label='Second name'/>
                                )}
                                control={ control }
                                name='secondName'
                                rules={{
                                    required: 'This is required field',
                                    minLength: {
                                        value: 2,
                                        message: 'This name is too short'
                                    },
                                    maxLength: {
                                        value: 25,
                                        message: 'This name is too long'
                                    },
                                }}
                            />
                            { errors.secondName && <div>{ errors.secondName.message }</div> }
                        </div>
                    </Box>
                    <div>
                        <Controller
                            render={({field}) => (
                                <Select { ...field } fullWidth  name='country' control={ control }  >
                                    <MenuItem value='Ukraine'> Ukraine </MenuItem>
                                    <MenuItem value='Russia'> Russia </MenuItem>
                                    <MenuItem value='England'> England </MenuItem>
                                </Select>
                            )}
                            name='country'
                            control={ control }
                            rules={{
                                required: 'This is required field'
                            }}
                        />
                    </div>
                    <div >
                        <Controller
                            render={({field}) => (
                                <TextField { ...field } label='Phone number' fullWidth  />
                            )}
                            control={ control }
                            name='phoneNumber'
                            defaultValue=''
                            rules={{
                                required: 'This is required field',
                                pattern: {
                                    value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/gmi,
                                    message: 'Please add correct number'
                                }
                            }}
                        />
                        { errors.phoneNumber && <div>{ errors.phoneNumber.message }</div> }
                    </div>
                    <div >
                        <Controller
                            render={({field}) => (
                                <TextField { ...field } label='City' fullWidth />
                            )}
                            control={ control }
                            name='city'
                            rules={{
                                required: 'This is required field',
                            }}
                        />
                    </div>
                    <Box sx={{
                        display: 'flex'
                    }}>
                        <div>
                            <Controller
                                render={({field}) => (
                                    <TextField { ...field } label='Address' />
                                )}
                                control={ control }
                                name='address'
                                rules={{
                                    required: 'This is required field'
                                }}
                            />

                        </div>
                        <div>
                            <Controller
                                render={({field}) => (
                                    <TextField { ...field } label='Reserve address' />
                                )}
                                control={ control }
                                name='reserveAddress'
                            />
                        </div>

                    </Box>
                    <div>
                        <Controller
                            render={({field}) => (
                                <TextField { ...field } fullWidth label='Email' />
                            )}
                            control={ control }
                            name='email'
                            rules={{
                                required: 'This is required field'

                            }}
                         />
                    </div>
                    <div>
                        <Controller
                            render={({ field}) => (
                                <RadioGroup { ...field } sx={{display: 'flex'}}>
                                    <FormControlLabel control={<Radio/>} label="Post"value='post'/>
                                    <FormControlLabel control={<Radio/>} label="Self Deliver" value='selfDeliver'/>
                                </RadioGroup>
                            )}
                            control={ control }
                            name='delivery'
                        />
                    </div>
                    <div>
                        <Controller
                            render={({ field })  => (
                                <FormControlLabel
                                    { ...field }
                                    control={<Checkbox />}
                                    label="Don't call me"
                                    labelPlacement="end"
                                    checked={ field.value }
                                />
                            )}
                            control={ control }
                            name='feedback'
                        />
                    </div>
                    <div>
                        <Controller
                            render={({ field }) => (
                                <TextField { ...field } fullWidth multiline label='Comment' rows={ 5 }/>
                            )}
                            control={ control }
                            name='comment'

                        />
                    </div>
                </Box>
                <Box >
                    <Button sx={{width: '50%'}} type='submit'>
                        continue
                    </Button>
                    <Button sx={{width: '50%'}}  onClick={() => setOrderIsOpen(!orderIsOpen)}>
                        reset
                    </Button>
                </Box>
            </form>

            { isSubmitted && <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "black",
            }}><OrderSecondStep/></div> }
        </Box>
    );
}

