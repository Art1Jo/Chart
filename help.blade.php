$table->foreignId('category_id')
            ->constrained('categoryintelligences')
            ->onUpdate('cascade')
            ->onDelete('cascade');
