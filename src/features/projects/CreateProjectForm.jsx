import { set, useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategory from "../../hooks/useCategory";
import useCreateProject from "./useCreateProject";
import Loader from "../../ui/Loader";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit }) {
  const { _id: editId } = projectToEdit;

  const isEditSession = Boolean(editId);
  const {
    title,
    description,
    budget,
    deadline,
    category,
    tags: prevTags,
  } = projectToEdit;

  let editValues = {};

  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      deadline,
      category: category._id,
    };
  }

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));

  const { categories } = useCategory();

  console.log(categories);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const { createProject, isCreatingProject } = useCreateProject();
  const { isEditingProject, editProject } = useEditProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      tags,
      deadline: new Date(date).toISOString(),
    };
    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
    console.log(newProject);
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
            value: 15,
            message: "طول توضیحات نباید کمتر از 15 باشد",
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
        }}
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        register={register}
        options={categories}
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
      <div className="!mt-8">
        {isCreatingProject ? (
          <Loader />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateProjectForm;
