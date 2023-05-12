$table->foreignId('categoryintelligences_id')
            ->constrained('categoryintelligences')
            ->onUpdate('cascade')
            ->onDelete('cascade');
