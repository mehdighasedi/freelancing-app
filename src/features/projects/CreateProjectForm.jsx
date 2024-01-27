import { set, useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";

function CreateProjectForm() {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="title"
        label="عنوان پروژه"
        register={register}
        AddationalCls="text-right"
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "طول عنوان نباید زیر 10 کاراکتر باشد",
          },
        }}
        errors={errors}
      />

      <TextField
        name="description"
        label="توضیحات"
        register={register}
        AddationalCls="text-right"
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 10,
            message: "طول توضیحات نباید کمتر از 10 باشد",
          },
        }}
        errors={errors}
      />
      <TextField
        name="budget"
        label="بودجه"
        register={register}
        AddationalCls="text-right"
        required
        validationSchema={{
          required: "بودجه ضروری است",
          minLength: {
            value: 5,
            message: "طول توضیحات نباید کمتر از 5 باشد",
          },
        }}
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        register={register}
        options={[]}
        required
      />
      <div>
        <label className="mb-2 text-secondary-700 block">تگ ها</label>
        <TagsInput
          value={tags}
          onChange={setTags}
          name="tags"
          placeHolder="تگ را وارد کنید ..."
        />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین" />
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
