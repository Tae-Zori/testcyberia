import React, { useEffect, useState } from "react";
import { fetchData } from "../data/Data";
import { ICategories, IProject, IProjects } from "../interfaces/Interfaces";
import CategoryBtn from "../components/UI/button/CategoryBtn";
import cl from "./Cases.module.scss";
import Card from "../components/UI/Card/Card";
import Form from "../components/UI/form/Form";

export const Cases = () => {
    const [categories, setCategories] = useState<ICategories | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [errorCategories, setErrorCategories] = useState<string>("");
    const [projects, setProjects] = useState<IProjects | null>(null);
    const [errorProjects, setErrorProjects] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );
    const [filteredProjects, setFilteredProjects] = useState<
        IProject[] | undefined | null
    >(null);

    useEffect(() => {
        fetchData(
            "https://api.test.cyberia.studio/api/v1/project-categories",
            setCategories,
            setLoading,
            setErrorCategories
        );
        fetchData(
            "https://api.test.cyberia.studio/api/v1/projects",
            setProjects,
            setLoading,
            setErrorProjects
        );
    }, []);

    useEffect(() => {
        setFilteredProjects(projects?.items);
    }, [projects]);

    const fillterProjects = (category: string) => {
        if (selectedCategory === category) {
            setSelectedCategory(null);
            setFilteredProjects(projects?.items);
        } else {
            setSelectedCategory(category);
            const sortProjects = projects?.items.filter((item, index) => {
                return item.categories[0].name === category;
            });
            setFilteredProjects(sortProjects);
        }
    };

    return (
        <article className={cl.cases}>
            <h1 className={cl.cases__title}>Кейсы</h1>
            <section className={cl.cases__categories}>
                {categories &&
                    !errorCategories &&
                    categories.items.map((item) => (
                        <CategoryBtn
                            key={item.id}
                            onClick={(e) => fillterProjects(item.name)}
                            selected={selectedCategory === item.name}
                        >
                            {item.name}
                        </CategoryBtn>
                    ))}
            </section>
            <section className={cl.cases__projects}>
                {projects &&
                    !errorProjects &&
                    filteredProjects?.map((item) => (
                        <Card key={item.id} project={item} />
                    ))}
            </section>
            <section className={cl.cases__form}>
                <div className={cl.cases__formTitle}>
                    <h2>Расскажите о вашем проекте:</h2>
                </div>
                <Form />
            </section>
        </article>
    );
};
