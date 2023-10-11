// https://docs.cypress.io/api/table-of-contents
import { randomNumberGenerate, diferentRandomNumber } from "../tools/index";

describe("tasks", () => {
  const NUMBER_OF_TASKS = 5;

  beforeEach(() => {
    cy.getLocalStorage("tasks");

    cy.visit("/tasks", {
      onBeforeLoad(win) {
        const user = {
          passport: "aaaaaaa",
          password: "aaaaaaaa",
        };

        win.localStorage.setItem("user", JSON.stringify(user));
      },
    });
  });

  it("should visits the app", () => {
    cy.contains("h1", "Lista de Tarefas");
    cy.contains("h2", "0 de 0 completas.");
    cy.dataCy("input").should(
      "have.attr",
      "placeholder",
      "Adicione uma tarefa"
    );
    cy.dataCy("add-task").should("be.disabled");
  });

  it("should add 5 tasks", () => {
    for (let i = 0; i < 5; i++) {
      cy.addTask(i);
    }
    cy.contains("h2", `0 de ${NUMBER_OF_TASKS} completas.`);
    cy.dataCy("task-item").should("have.length", NUMBER_OF_TASKS);

    cy.getLocalStorage("tasks").then((result) => {
      expect(JSON.parse(result).length).to.eq(NUMBER_OF_TASKS);
    });
  });

  it("should complete 2 tasks", () => {
    for (let i = 0; i < NUMBER_OF_TASKS; i++) {
      cy.addTask(i);
    }

    const firstRandomNumber = randomNumberGenerate(NUMBER_OF_TASKS);

    cy.actTaskItem(firstRandomNumber, "check-box");

    const secondRandomNumber = diferentRandomNumber(
      firstRandomNumber,
      NUMBER_OF_TASKS - 1
    );

    cy.actTaskItem(secondRandomNumber, "check-box");

    cy.contains("h2", `${2} de 5 completas.`);
  });

  it("should delete 2 tasks", () => {
    for (let i = 0; i < NUMBER_OF_TASKS; i++) {
      cy.addTask(i);
    }

    const firstRandomNumber = randomNumberGenerate(NUMBER_OF_TASKS);

    cy.actTaskItem(firstRandomNumber, "submit");

    const secondRandomNumber = diferentRandomNumber(
      firstRandomNumber,
      NUMBER_OF_TASKS
    );

    cy.actTaskItem(secondRandomNumber, "submit");

    cy.contains("h2", `${0} de ${NUMBER_OF_TASKS - 2} completas.`);
    cy.dataCy("task-item").should("have.length", NUMBER_OF_TASKS - 2);

    cy.getLocalStorage("tasks").then((result) => {
      expect(JSON.parse(result).length).to.eq(NUMBER_OF_TASKS - 2);
    });
  });
});
